const users = require("express").Router();
const {
  getAllUsers,
  getUserByid,
  getUserByEmail,
  getPostByUser,
  getPostByUser,
  updateUser,
  createNewUser,
  deleteUser
} = require("../../queries/users/usersQueries");

users.get("/", getAllUsers);

users.get("/:id", getUserByid);

users.get("/:email", getUserByEmail);

users.get("/:id/posts", getPostByUser);

users.patch("/:id", updateUser);

users.post("/", createNewUser);

users.delete("/:id", deleteUser);
module.exports = users;
