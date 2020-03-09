const tags = require("express").Router();
const {
  getAllTags,
  getTagByName,
  createTag,
  deleteTag
} = require("../../queries/tags/tagsQueries");

const { isPostExisting } = require("../../queries/posts/postQueries");

tags.get("/", getAllTags);
tags.get("/:tag", getTagByName);
tags.post("/", isPostExisting, createTag);
tags.delete("/:id", deleteTag);

module.exports = tags;
