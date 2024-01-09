"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import SaveTemplate from "@/app/ui/dashboard/saveTemplate/saveTemplate";
import DashboardHeader from "@/app/ui/dashboard/dashboardHeader/page";
import PrimaryButton from "@/app/ui/primaryButton/page";
import SelectEmails from "@/app/ui/dashboard/selectEmails/page";
import { backendBaseUrl } from "@/constants";
import { ContentState, EditorState } from "draft-js";

const ComposeEmail = () => {
  const [selectedEmailValues, setSelectedEmailValues] = useState([]);
  const [emailOptions , SetEmailOptions] = useState([])
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [templates, setTemplates] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
 



  useEffect(() => {
    axios.get(`${backendBaseUrl}/templates`).then((res) => {
      setTemplates(res.data);
    });

    axios.get(`${backendBaseUrl}/csv/data`).then((res) => {
      const Emails = res.data.records.map((item) => item.email)
      SetEmailOptions(Emails)
    });

    

  }, [showModal, templates]);

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);

    if (template) {
      setSubject(template.subject || "");
      const newEditorState = EditorState.createWithContent(
        ContentState.createFromText(template.description || "")
      );
      setEditorState(newEditorState);
    }
  };

  const handleSaveTemplate = () => {
    setShowModal(true);
  };

  const handleSaveTemplateData = ({ name, subject, description }) => {
    axios
      .post(`${backendBaseUrl}/templates/create`, {
        name: name,
        subject: subject,
        description: description,
      })
      .then(() => console.log(name, subject, description));
    setShowModal(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      to: selectedEmailValues,
      subject: subject,
      text: body,
    };

    try {
      const response = await fetch(`${backendBaseUrl}/email/send-email`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully");
        setSelectedEmailValues([])
        setSubject('')
        setBody('')
      } else {
        console.log("error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full m-auto h-[60vh] rounded-md my-4">
      <form onSubmit={handleSubmit} className="w-full space-y-5 relative px-16 py-6 solid">
        <div className="w-full  flex justify-between items-center">
          <SelectEmails selectedValues={selectedEmailValues} setSelectedValues={setSelectedEmailValues} options={emailOptions} />
        </div>
        <div>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Subject"
            className="w-full py-4 px-2 rounded-md  outline-blue-200 border border-gray-200"
          />
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px',height:'200px', borderRadius: '5px' }}>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState} 
        toolbar={{
          options: ['inline',  'list', 'textAlign', 'history'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
          },
          blockType: {
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote'],
          },
          fontSize: {
            options: [8, 9, 10, 11, 12, 14, 18, 24, 30, 36],
          },
          fontFamily: {
            options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
          },
          list: {
            options: ['unordered', 'ordered'],
          },
          textAlign: {
            options: ['left', 'center', 'right', 'justify'],
          },
          link: {
            options: ['link'],
          },
          emoji: {
            options: ['emoji'],
          },
          history: {
            options: ['undo', 'redo'],
          },
        }}
      />
    </div>
        <div>
          <label htmlFor="template" className="text-lg text-textDark  mr-4">
            Select Template:
          </label>
          <select
            id="template"
            className="pr-6 py-4 w-[400px]  rounded-sm outline-none"
            onChange={(e) =>
              handleSelectTemplate(
                templates?.find((template) => template.name === e.target.value)
              )
            }
            value={selectedTemplate ? selectedTemplate.name : {}}
          >
            {templates?.map((template) => {
              return (
                <option
                  className="px-4 py-4"
                  key={template.name}
                  value={template.name}
                >
                  {template.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <div className="right-16 bottom-14 absolute space-x-8">
            <PrimaryButton
              type={"button"}
              handleClick={handleSaveTemplate}
              ButtonName={"Save Template"}
            />
            <SaveTemplate
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              onSave={handleSaveTemplateData}
              subject={subject}
              body={body}
            />
            <PrimaryButton type={"submit"} ButtonName={"Send Email"} />
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default ComposeEmail;
