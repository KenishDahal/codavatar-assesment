"use client";
import React, { useState } from "react";

const Drop = ({ topic, text }) => {
  const [fileName, setFileName] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Store the file name
    }
  };

  return (
    <div className="drop">
      <div className="uploadHead">{topic}</div>
      <div className="uploadText">{text}</div>
      <div className="drop__upload">
        <img src="./files.jpg" alt="" />
        <label htmlFor="fileInput">
          <span style={labelStyle}>Click to upload </span>{" "}
          <span className="uploadText">or drag and drop</span>
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="uploadText"
          style={inputStyle}
          id="fileInput"
        />
        {/* <div className='uploadText click'>Click to upload or drag and drop</div> */}
        <div className="uploadText">Maximum file size 50 MB</div>
      </div>
    </div>
  );
};

const labelStyle = {
  textDecoration: "underline", //
};

const inputStyle = {
  display: "none", // Hide the default file input
};

export default Drop;
