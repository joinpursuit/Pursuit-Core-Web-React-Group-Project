const tags = require("express").Router();
const {
  getAllTags,
  createTag,
  deleteTag
} = require("../../queries/tags/tagsQueries");

tags.get("/", getAllTags);
tags.post("/", createTag);
tags.delete("/:id", deleteTag);

module.exports = tags;
