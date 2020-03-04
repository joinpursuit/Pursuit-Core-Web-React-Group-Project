const hashtags = require("express").Router();
const { getAllHashtagsBySinglePost } = require("../queries/hashtagQueries");

hashtags.get("/post/:post_id", getAllHashtagsBySinglePost);
hashtags.post("/post/:post_id", insertHashtagOnSinglePost);

module.exports = hashtags;
