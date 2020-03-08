import React, { useState } from "react";
import { useInput } from "../../util/customHooks";
import axios from "axios";

const CreatePostForm = () => {
  const [file, setFile] = useState("");
  //   const [post_image_url, setPostImageUrl] = useState("");
  //   const [body, setBody] = useInput("");

  const fileOnChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("imageUpload", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("/uploadphoto", formData, config)
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => {});
  };

  return (
    <>
      <h1>Create a post</h1>
      <form onSubmit={handleSubmit}>
        <label>Upload Image</label>
        <input type="file" name="imageUpload" onChange={fileOnChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default CreatePostForm;
