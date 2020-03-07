const hashtags = require("express").Router();
const {
  getAllHashtagsBySinglePost,
  insertHashtagOnSinglePost,
  deleteHashtagOnSinglePost
} = require("../queries/hashtagQueries");

hashtags.get("/post/:post_id", getAllHashtagsBySinglePost);
hashtags.post("/post/:post_id", insertHashtagOnSinglePost);
hashtags.delete("/post/:owner_id/:post_id/:id", deleteHashtagOnSinglePost);

module.exports = hashtags;
