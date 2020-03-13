import React, { useState } from "react";
import Upload from "../UniversalComponents/Upload";
import axios from "axios";
import { useInput } from "../../util/customHooks";

const CreatePostForm = ({ fetchAllPosts }) => {
  const captionObj = useInput("");
  const captionInput = captionObj.value;

  const [path, setPath] = useState("");

  const handleCreatePost = async e => {
    e.preventDefault();
    if (path && captionInput) {
      try {
        await axios.post("/posts/", {
          owner_id: sessionStorage.userID,
          post_image_url: path,
          body: captionInput
        });
        fetchAllPosts("/posts");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please upload a valid image and enter valid caption!");
    }
  };

  return (
    <div className="createPost">
      <h1>Create a post</h1>
      <Upload cb={setPath} />
      <form onSubmit={handleCreatePost}>
        <input
          name={"body"}
          type="text"
          {...captionObj}
          placeholder="Enter a caption"
          required
        ></input>
        <button type="click">Create post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
