"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

import SaveTemplate from "@/app/ui/dashboard/saveTemplate/saveTemplate";
import DashboardHeader from "@/app/ui/dashboard/dashboardHeader/page";
import PrimaryButton from "@/app/ui/primaryButton/page";
import SelectEmails from "@/app/ui/dashboard/selectEmails/page";

const EmailCampaign = () => {
  const [selectedEmailValues, setSelectedEmailValues] = useState([]);
  const [emailOptions , SetEmailOptions] = useState([])
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [templates, setTemplates] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showModal, setShowModal] = useState(false);



  useEffect(() => {
    axios.get("https://email-campaign.onrender.com/templates").then((res) => {
      setTemplates(res.data);
    });

    axios.get("https://email-campaign.onrender.com/emailLists").then((res) => {
      SetEmailOptions(res.data);
    });

    

  }, [showModal, templates]);

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);

    if (template) {
      setSubject(template.subject || "");
      setBody(template.description || "");
    }
  };

  const handleSaveTemplate = () => {
    setShowModal(true);
  };

  const handleSaveTemplateData = ({ name, subject, description }) => {
    axios
      .post("https://email-campaign.onrender.com/templates/create", {
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
      const response = await fetch("https://email-campaign-lnfx.onrender.com/email/send-email", {
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
    <div className="min-w-[88%] h-full m-auto  space-y-6">
      <DashboardHeader heading={"Compose Email"} />
      <form onSubmit={handleSubmit} className="w-full space-y-10 relative px-16 py-6 solid">
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
        <div>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            placeholder="Description"
            className="w-full h-52 py-4 px-2 rounded-md  outline-blue-200 border border-gray-200"
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

export default EmailCampaign;
