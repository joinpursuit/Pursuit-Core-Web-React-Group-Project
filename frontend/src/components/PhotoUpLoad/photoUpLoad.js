import React, { useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [file, setFile] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    await formData.append("myImage", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
  };
  const onChange = e => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>File Upload</h1>
      <input type="file" name="myImage" onChange={onChange} />
      <input type="submit"></input>
    </form>
  );
};

export default UploadImage;
