import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInput } from "../../util/customHooks";
import "../../css/uploadPost.css"

export default function UploadPost({ getAllposts }) {
  // const userId = useInput("");
  const brand = useInput("");
  const description = useInput("");
  const year = useInput("");
  const colorway = useInput("");
  const postPic = useInput("");
  const tag = useInput("");
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const fileSelectHandle = e => {
    const blk = e.target.files[0];
    console.log(blk);
    const formData = new FormData();
    formData.append("upload_preset", "heatcheck");
    formData.append("file", blk);
    // setLoading(true)
    axios({
      url: "https://api.cloudinary.com/v1_1/perezsyn/image/upload",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formData
    })
      .then(function(res) {
        console.log(res);
        console.log(res.data.url);
        setImage(res.data.url);
        setLoading(false);
      })
      .then(function(err) {});

    // axios.post('https://api.cloudinary.com/v1_1/perezsyn/image/upload', formData)
    // .then(res => setImage(res.data.secure_url))
    // .then(setLoading(false))
    // .catch(err => console.log(err))

    // try {
    //     axios.post("https://api.cloudinary.com/v1_1/perezsyn/image/upload",formData)
    //     .then(res => setPic(res.data.secure_url))
    // } catch (error) {
    //    console.log(error);

    // }
    // / setPic (e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let newtag =
      tag.value["0"].toUpperCase() +
      tag.value.slice(1, tag.value.length).toLowerCase();

    try {
      await axios.post("http://localhost:3001/posts", {
        user_id: sessionStorage.getItem("userID"),
        image: image,
        brand: brand.value,
        description: description.value,
        release_date: year.value,
        colorway: colorway.value,
        tag: newtag
      });
      getAllposts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="uploadPost">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          onInput={fileSelectHandle}
          required
          {...postPic}
        />

        <br />
        <select required {...brand}>
          <option value={""} disabled>
            Brand
          </option>
          <option value={"Jordan"}>Jordan</option>
          <option value={"Nike"}>Nike</option>
          <option value={"Adidas"}>Adidas</option>
          <option value={"Converse"}>Converse</option>
          <option value={"Other"}>Other</option>
        </select>
        <input
          type="text"
          placeholder="description"
          required
          {...description}
        />
        <input
          type="number"
          min="1984"
          max="2020"
          placeholder="year"
          required
          {...year}
        />
        <input type="text" placeholder="colorway" required {...colorway} />
        <input type="text" placeholder="tag" required {...tag} />
        <input type="submit" />
      </form>
      {image ? (
        <div>
          {loading ? (
            <p>loading</p>
          ) : (
            <img style={{ width: "100px", height: "100px" }} src={image} />
          )}
        </div>
      ) : null}
    </div>
  );
}
