
const posts = require('express').Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const {
  getposts,
  getpost,
  newpost,
  editPost,
  deletePost
} = require("../../backend/queries/posts.js");

posts.get("/", getposts); //get all posts
posts.get("/:userId", getpost); //Get single user's post
posts.post("/", upload.single('avatar'), newpost); //Add single post
posts.patch("/:id", editPost); //Edit single post.
posts.delete("/:id", deletePost); //delete post

module.exports = posts;
