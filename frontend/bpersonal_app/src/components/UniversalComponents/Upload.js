import React, { useState } from "react";
import axios from "axios";

const Upload = ({ cb }) => {
  const [file, setFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUploadSubmit = async (e, call) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageUpload", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    if (file) {
      axios
        .post("/uploadphoto", formData, config)
        .then(response => {
          alert("The file is successfully uploaded");
          call(response.data);
        })
        .catch(error => {
          alert("Could not upload... please upload valid image");
        });
    } else {
      alert("Could not upload... please upload valid image");
    }
  };

  const checkImageType = e => {
    let files = e.target.files;
    let err = "";
    const types = ["image/png", "image/jpeg", "image/gif"];
    for (var x = 0; x < files.length; x++) {
      if (types.every(type => files[x].type !== type)) {
        err += files[x].type + " is not a supported format\n";
      }
    }
    if (err !== "") {
      e.target.value = null;
      alert(err);
      return false;
    }
    return true;
  };

  const fileOnChange = e => {
    if (checkImageType(e)) {
      setFile(e.target.files[0]);
      setErrorMessage("");
    } else {
      setErrorMessage("File type is invalid, please upload jpeg, png, gif");
    }
  };

  return (
    <form
      onSubmit={e => {
        handleUploadSubmit(e, cb);
      }}
    >
      <label>Upload Image</label>
      <input type="file" name="imageUpload" onChange={fileOnChange} />
      <button type="submit">Upload</button>
      <h4>{errorMessage}</h4>
    </form>
  );
};

export default Upload;
