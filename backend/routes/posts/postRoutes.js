const posts = require("express").Router();
const postPicturesRouter = require("./postPictures/postPicturesRoutes");
const postTagsRouter = require("./postTags/postTagsRoutes");

const {
  getAllPosts,
  getPostById,
  createPost,
  deletePost
} = require("../../queries/posts/postQueries");

posts.get("/", getAllPosts);
posts.get("/:id", getPostById);
posts.use("/:id/tags", postTagsRouter);
posts.use("/:id/pictures", postPicturesRouter);
posts.post("/", createPost);
posts.delete("/:id", deletePost);

module.exports = posts;
