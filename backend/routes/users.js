const users = require("express").Router();

const {
  getAllUsers,
  getSingleUserById,
  insertSingleUser,
  deleteUsersById,
  searchUserByName,
  updateUserById,
  updateUserProfilePic
} = require("../queries/usersQueries.js");

users.get("/", getAllUsers);
users.get("/:id", getSingleUserById);
users.post("/addUser", insertSingleUser);
users.delete("/:id", deleteUsersById);
users.get("/search/:username", searchUserByName);
users.patch("/:id", updateUserById);
users.patch("/profile_pic/:id", updateUserProfilePic);

module.exports = users;
