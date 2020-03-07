const db = require("../../database/index");

const getAllPics = async (req, res, next) => {
  try {
    let tags = await db.one(`SELECT * FROM pictures`);
    res.status(200).json({
      status: "success",
      tags,
      message: "all pics"
    });
  } catch (error) {
    console.log(error);
  }
};

const addPic = async (req, res, next) => {
  try {
    await db.none(`INSERT INTO pictures (post_id,picture)
    Values(${req.body.post_id},${req.body.picture}`);
    res.status(200).json({
      status: "ok",
      message: "new pic added"
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePic = async (req, res, next) => {
  try {
    await db.any(`DELETE FROM pictures WHERE id = ${req.params.id}`);
    res.status(200).json({
      status: "ok",
      message: "tag deleted"
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllPics, addPic, deletePic };
