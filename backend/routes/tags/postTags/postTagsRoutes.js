const postTags = require("express").Router({ mergeParams: true });
const getPostByTags = require("../../../queries/tags/postTags/postTagsQueries");

postTags.get("/", getPostByTags);

module.exports = postTags;
