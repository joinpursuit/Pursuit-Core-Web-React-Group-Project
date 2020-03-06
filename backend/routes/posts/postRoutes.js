const posts = require("express").Router();
const {
  getAllPosts,
  getPostById,
  getTagOfPost,
  getPostByTag,
  getPicturesOfPost,
  createPost,
  deletePost
} = require("../../queries/posts/postQueries");

posts.get("/posts", getAllPosts);
posts.get("/posts/:id", getPostById);
posts.get("posts/:id/:tag", getTagOfPost);
posts.get("posts/tags/:tagName", getPostByTag);
posts.get("posts/:id/pictures", getPicturesOfPost);
posts.post("posts", createPost);
posts.delete("posts/:id", deletePost);

module.exports = posts;
