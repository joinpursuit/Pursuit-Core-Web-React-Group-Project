const likes = require("express").Router();

const {
  getLikesForSinglePost,
  addSingleLike,
  deleteSingleLike
} = require("../queries/postQueries");

likes.get("/post/:post_id", getLikesForSinglePost);
likes.post("/post/:post_id/:liker_id", addSingleLike);
likes.delete("/:post_id/:liker_id", deleteSingleLike);

module.exports = likes;
