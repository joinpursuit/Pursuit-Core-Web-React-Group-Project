const posts = require("express").Router();
const postPicturesRouter = require("./postPictures/postPicturesRoutes");
const postTagsRouter = require("./postTags/postTagsRoutes");

const {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  isPostExisting
} = require("../../queries/posts/postQueries");

const { isUserExisting } = require("../../queries/users/usersQueries");

posts.use("/:id/tags", postTagsRouter);
posts.use("/:id/pictures", postPicturesRouter);

posts.get("/", getAllPosts);
posts.get("/:id", isPostExisting, getPostById);
posts.post("/", isUserExisting, createPost);
posts.delete("/:id", isPostExisting, deletePost);

module.exports = posts;
