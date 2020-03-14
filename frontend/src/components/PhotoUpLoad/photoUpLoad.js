import React, { useState } from "react";
import axios from "axios";
import { useInput } from "../../util/customHooks";

const UploadImage = ({ userId }) => {
  const [file, setFile] = useState();
  const caption = useInput();

  const onSubmit = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();

      formData.append("myImage", file);
      formData.append("poster_id", userId);
      formData.append("caption", caption.value);
      formData.append("created_at", new Date().toString());

      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      let res = await axios.post("/api/posts", formData, config);
    } catch (err) {
      console.log(err);
    }
  };
  const onChange = e => {
    setFile(e.target.files[0]);
  };
  console.log(caption);

  return (
    <form onSubmit={onSubmit}>
      <h1>File Upload</h1>
      <input type="file" name="myImage" onChange={onChange} />
      <input type="text" {...caption}></input>
      <input type="submit"></input>
    </form>
  );
};

export default UploadImage;
