const posts = require("express").Router();

const {
  getAllPosts,
  getAllPostsBySingleUser,
  getSinglePost,
  insertSinglePost,
  updateSinglePost,
  deletePost
} = require("../queries/postQueries");

posts.get("/", getAllPosts);
posts.get("/ownerID/:owner_id", getAllPostsBySingleUser);
posts.get("/:id", getSinglePost);
posts.post("/", insertSinglePost);
posts.patch("/:id", updateSinglePost);
posts.delete("/:id", deletePost);

module.exports = posts;
