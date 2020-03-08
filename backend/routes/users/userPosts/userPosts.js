const userPosts = require("express").Router({ mergeParams: true });
const getPostByUser = require("../../../queries/users/userPosts/userPosts");

userPosts.get("/", getPostByUser);

module.exports = userPosts;
