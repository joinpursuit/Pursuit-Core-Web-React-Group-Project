const users = require("express").Router();
const {
  getAllUsers,
  getUserById,
  logIn,
  getPostByUser,

  updateUser,
  createNewUser,
  deleteUser
} = require("../../queries/users/usersQueries");

users.get("/", getAllUsers);

users.get("/:id", getUserById);

users.post("/login", logIn);

// users.get("/:id/posts", getPostByUser);

users.patch("/:id", updateUser);

users.post("/", createNewUser);

users.delete("/:id", deleteUser);
module.exports = users;
