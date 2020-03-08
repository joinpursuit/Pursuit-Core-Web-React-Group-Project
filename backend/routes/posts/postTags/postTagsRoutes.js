const postTags = require("express").Router({ mergeParams: true });
const getTagOfPost = require("../../../queries/posts/postsTags/postsTagsQueries");

postTags.get("/", getTagOfPost);

module.exports = postTags;
