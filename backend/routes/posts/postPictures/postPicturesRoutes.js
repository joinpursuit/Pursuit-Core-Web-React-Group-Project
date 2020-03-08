const postPicture = require("express").Router({ mergeParams: true });
const getPicturesOfPost = require("../../../queries/posts/postPictures/postPicturesQueries");

postPicture.get("/", getPicturesOfPost);

module.exports = postPicture;
