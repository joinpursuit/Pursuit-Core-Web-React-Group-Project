import React, { useState } from "react";
import Upload from "../UniversalComponents/Upload";
import axios from "axios";
import { useInput } from "../../util/customHooks";

const CreatePostForm = () => {
  const captionObj = useInput("");

  const handleCreatePostClick = async () => {
    try {
      let res = await axios.post("/posts/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(captionObj);
  return (
    <div className="createPost">
      <h1>Create a post</h1>
      <Upload />
      <input
        name={"body"}
        {...captionObj}
        type="text"
        placeholder="Enter a caption"
      ></input>
      <button type="click" onClick={handleCreatePostClick}>
        Create post
      </button>
    </div>
  );
};

export default CreatePostForm;
