const tags = require("express").Router();
const {
  getAllTags,
  createTag,
  deleteTag
} = require("../../queries/tags/tagsQueries");

tags.get("/", getAllTags);
tags.post("/", createTag);
tags.delete("/:id", deleteTag);
// tags.get("/tags/:tagName", getPostByTag);

module.exports = tags;
