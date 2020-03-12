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
      // console.log(error);
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
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVQ4T2NkQAL/GRj+MzIwMCKLobPR1cAV/2Rg+A9TzI7DEGxqwAZ8RtIMM4QXzRBcahjfYNEMM0QEagg+NWAXPMNjCL7wkGJgYISHwX0shvyB6mbBYooi1HUoIX4TzZCfUI3saAaoI4UPRpRdRjLkG1QjF5IBumiBi2HAGSQDvkA18iAZYILPgGNoXvgE1ciH5gUrbF7YjyUQP0I18mMJREfkQNyJIxo/QDUK4IhLd1A0bsaTBnyhtuBTAw7ENVgMCUELLFxq4LGwDMmQKByZCZsalGicz8DwP5FAdkZXAwAmkDau+YtyUwAAAABJRU5ErkJggg=="
              onClick={e => handleDeleteHashtag(hashtag.id)}
            />
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
            Add #
          </button>
          <button onClick={toggleEditBtnsObj.onClick}>Delete #</button>
        </>
      ) : null}
      {toggleInsertObj.showInsert ? (
        <form onSubmit={handleInsertHashtag}>
          <input type="text" {...hashtagInputObj} required></input>
          <button type="submit">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjElEQVQ4T7WTsQ2AIBAAjy0cwVJHsHBuR9DSASzcQvMGCBCegEYbG++88I/h42Ne8pfjfhP09g+7UlgsEHix4ATkJKrAwZ0VbMCYqcgKUvgEqgtaYAmKClK4abIyxhUYmqjgYxF8LhBfKjmAWRlhFBtuYutBPqJ0lWv3wFfk7kLNJhYF7kzkrd0FL7gB894gBx/QYwgAAAAASUVORK5CYII="></img>
          </button>
        </form>
      ) : null}
      {showHashtags}
    </>
  );
};

export default Hashtags;
