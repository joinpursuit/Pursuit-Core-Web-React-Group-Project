const postPicture = require("express").Router({ mergeParams: true });
const getPicturesOfPost = require("../../../queries/posts/postPictures/postPicturesQueries");
const { isPostExisting } = require("../../../queries/posts/postQueries");

postPicture.get("/", isPostExisting, getPicturesOfPost);

module.exports = postPicture;
