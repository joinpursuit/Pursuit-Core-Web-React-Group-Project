const pictures = require("express").Router();
const {
  getAllPics,
  addPic,
  deletePic
} = require("../../queries/pictures/picturesQueries");

// pictures.get("/", getAllPics);
// pictures.post("/", addPic);
// pictures.delete("/:id", deletePics);

module.exports = pictures;
