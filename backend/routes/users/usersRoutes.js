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

users.get("/users", getAllUsers);

users.get("/:id", getUserByid);

users.get("users/:email", getUserByEmail);

users.get("users/:id/posts", getPostByUser);

users.patch("users/:id", updateUser);

users.post("/users", createNewUser);

users.delete("users/:id", deleteUser);
module.exports = users;
