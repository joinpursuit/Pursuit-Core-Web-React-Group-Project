const users = require("express").Router();

const {
  getAllUsers,
  getSingleUserById,
  insertSingleUser,
  deleteUsersById,
  searchUserByName
} = require("../queries/usersQueries.js");

users.get("/", getAllUsers);
users.get("/:id", getSingleUserById);
users.post("/", insertSingleUser);
users.delete("/:id", deleteUsersById);
users.get("/search/:username", searchUserByName);

module.exports = users;
