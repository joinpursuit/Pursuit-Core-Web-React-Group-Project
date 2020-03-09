const pictures = require("express").Router();
const {
  getAllPics,
  addPic,
  deletePic
} = require("../../queries/pictures/picturesQueries");

const { isPostExisting } = require("../../queries/posts/postQueries");

pictures.get("/", getAllPics);
pictures.post("/", isPostExisting, addPic);
pictures.delete("/:id", deletePic);

module.exports = pictures;
