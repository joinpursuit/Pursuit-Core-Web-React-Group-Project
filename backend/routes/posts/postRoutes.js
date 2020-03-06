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

posts.get("/", getAllPosts);
posts.get("/:id", getPostById);
posts.get("/:id/:tag", getTagOfPost);
posts.get("/tags/:tagName", getPostByTag);
posts.get("/:id/pictures", getPicturesOfPost);
posts.post("/", createPost);
posts.delete("/:id", deletePost);

module.exports = posts;
