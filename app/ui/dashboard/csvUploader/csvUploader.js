"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { backendBaseUrl } from "@/constants";

const CSVUploader = ({ isValidated, setIsValidated, file, setFile }) => {
  const [data, setData] = useState([]);

  const displayData = async () => {
    try {
      const response = await axios.get(
        `${backendBaseUrl}/csv/data `
      );
      if (response.status === 200) {
        setData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleClearFile = () => {
    setFile(null);
    setIsValidated(false);
  };

  const handleValidate = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        `${backendBaseUrl}/csv/upload`,
        formData
      );
      if (response.status === 201) {
        console.log(file);
        toast.success("File validated successfully");
        setIsValidated(true);
        displayData();
      } else {
        setIsValidated(false);
        toast.error("Validation Error");
      }
    } catch (error) {
      setIsValidated(false);
      toast.error("Validation Error");
    }
  };

  return (
    <Box className="flex flex-col items-center w-full justify-around my-4 min-h-[60vh]">
      <Paper
        elevation={3}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="min-w-72 p-8 text-center cursor-pointer"
      >
        {!file && !isValidated ? (
          <div className="space-y-4 min-h-[270px]">
            <CloudUploadIcon sx={{ fontSize: 80 }} />
            <Typography variant="h6">
              Drag and drop your CSV file here
            </Typography>
            <Typography variant="body2">or</Typography>
            <br />
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button component="span" variant="contained">
                Browse File
              </Button>
            </label>
          </div>
        ) : isValidated && data.records?.length > 0 ? (
          <div className="overflow-y-hidden h-80 relative flex flex-col">
            <div className="my-3 flex justify-between items-center px-3">
              <Typography
                variant="subtitle2"
                align="left"
                color="textSecondary"
              >
                Total emails listed: {data.count}
              </Typography>
              <Button
                variant="outlined"
                onClick={handleClearFile}
                className="my-5 w-fit "
              >
                Clear File
              </Button>
            </div>
            <TableContainer className="overflow-y-hidden">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.records.slice(0, 5).map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent"></div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-around min-h-[270px]">
            <Typography variant="subtitle1">
              File selected: {file.name}
            </Typography>
            <Button variant="outlined" onClick={handleClearFile}>
              Clear File
            </Button>
            <Button variant="contained" type="primary" onClick={handleValidate}>
              Validate
            </Button>
          </div>
        )}
        <Toaster />
      </Paper>
    </Box>
  );
};

export default CSVUploader;
