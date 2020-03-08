const users = require("express").Router();
const userPostsRouter = require("./userPosts/userPosts");
const {
  getAllUsers,
  getUserById,
  logIn,
  updateUser,
  createNewUser,
  deleteUser
} = require("../../queries/users/usersQueries");

users.use("/:id/posts", userPostsRouter);

users.get("/", getAllUsers);

users.get("/:id", getUserById);

users.post("/login", logIn);

users.patch("/:id", updateUser);

users.post("/", createNewUser);

users.delete("/:id", deleteUser);
module.exports = users;
