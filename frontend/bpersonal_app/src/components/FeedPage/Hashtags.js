import React, { useState, useEffect } from "react";
import { useInput, useToggleShow } from "../../util/customHooks";
import axios from "axios";

const Hashtags = ({ id }) => {
  const [hashtags, setHashtags] = useState([]);
  const toggleInsertObj = useToggleShow(false);
  const toggleEditBtnsObj = useToggleShow(false);
  const hashtagInputObj = useInput("");
  const [ownerStatus, setOwnerStatus] = useState(false);
  const body = hashtagInputObj.value;

  const handleOwner = async () => {
    try {
      let res = await axios.get(`/hashtags/post/${id}`);
      const { owner_id } = res.data.body.result[0];
      if (Number(sessionStorage.userID) === owner_id) {
        setOwnerStatus(true);
      } else {
        setOwnerStatus(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInsertHashtag = async e => {
    e.preventDefault();
    try {
      await axios.post(`/hashtags/${sessionStorage.userID}/post/${id}`, {
        body
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteHashtag = async hashtag_id => {
    try {
      await axios.delete(
        `/hashtags/post/${sessionStorage.userID}/${id}/${hashtag_id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHashtags = async url => {
    try {
      let res = await axios.get(url);
      const { result } = res.data.body;
      setHashtags(result);
    } catch (error) {
      console.log(error);
      setHashtags([]);
    }
  };

  useEffect(() => {
    handleOwner();
    fetchHashtags(`/hashtags/post/${id}`);
  }, [hashtags]);

  let showHashtags = hashtags.map(hashtag => {
    if (
      Number(sessionStorage.userID) === hashtag.owner_id &&
      toggleEditBtnsObj.showInsert
    ) {
      return (
        <li key={hashtag.id} id={hashtag.id} style={{ listStyle: "none" }}>
          #{hashtag.body}
          {toggleEditBtnsObj.showInsert ? (
            <button onClick={e => handleDeleteHashtag(hashtag.id)}>X</button>
          ) : null}
        </li>
      );
    } else {
      return (
        <li key={hashtag.id} id={hashtag.id} style={{ listStyle: "none" }}>
          #{hashtag.body}
        </li>
      );
    }
  });
  return (
    <>
      {ownerStatus ? (
        <>
          <button id="insertHashtagBtn" onClick={toggleInsertObj.onClick}>
            Add a # tag?
          </button>
          <button onClick={toggleEditBtnsObj.onClick}>Delete?</button>
        </>
      ) : null}
      {toggleInsertObj.showInsert ? (
        <form onSubmit={handleInsertHashtag}>
          <input type="text" {...hashtagInputObj}></input>
          <button type="submit">+</button>
        </form>
      ) : null}
      {showHashtags}
    </>
  );
};

export default Hashtags;
