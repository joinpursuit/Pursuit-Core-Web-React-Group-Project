import React, { useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [file, setFile] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("myImage", file);
    formData.append("post_id", 2);
    console.log(file);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    let res = await axios.post("/api/pictures", formData, config);
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
