const tags = require("express").Router();
const postTagsRouter = require("./postTags/postTagsRoutes");
const {
  getAllTags,
  createTag,
  deleteTag
} = require("../../queries/tags/tagsQueries");

tags.get("/", getAllTags);
tags.post("/", createTag);
tags.delete("/:id", deleteTag);

tags.use("/:tagName/posts", postTagsRouter);

module.exports = tags;
