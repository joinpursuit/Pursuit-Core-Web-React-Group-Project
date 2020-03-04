const hashtags = require("express").Router();
const {
  getAllHashtagsBySinglePost,
  insertHashtagOnSinglePost,
  deleteHashtagOnSinglePost
} = require("../queries/hashtagQueries");

hashtags.get("/post/:post_id", getAllHashtagsBySinglePost);
hashtags.post("/post/:post_id", insertHashtagOnSinglePost);
hashtags.delete("/post/:post_id", deleteHashtagOnSinglePost);

module.exports = hashtags;
