const userPosts = require("express").Router({ mergeParams: true });
const getPostByUser = require("../../../queries/users/userPosts/userPosts");
const { isUserExisting } = require("../../../queries/users/usersQueries");

userPosts.get("/", isUserExisting, getPostByUser);

module.exports = userPosts;
