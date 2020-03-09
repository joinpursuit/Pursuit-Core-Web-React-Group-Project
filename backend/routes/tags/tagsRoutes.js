const tags = require("express").Router();
const {
  getAllTags,
  getTagByName,
  createTag,
  deleteTag
} = require("../../queries/tags/tagsQueries");

tags.get("/", getAllTags);
tags.get("/:tag", getTagByName);
tags.post("/", createTag);
tags.delete("/:id", deleteTag);

module.exports = tags;
