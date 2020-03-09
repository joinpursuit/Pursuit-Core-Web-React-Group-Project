const users = require("express").Router();
const userPostsRouter = require("./userPosts/userPosts");
const {
  getAllUsers,
  getUserById,
  logIn,
  updateUser,
  createNewUser,
  deleteUser,
  isUserExisting
} = require("../../queries/users/usersQueries");

users.use("/:id/posts", userPostsRouter);

users.get("/", getAllUsers);

users.get("/:id", isUserExisting, getUserById);

users.post("/login", logIn);

users.patch("/:id", isUserExisting, updateUser);

users.post("/", createNewUser);

users.delete("/:id", isUserExisting, deleteUser);
module.exports = users;
