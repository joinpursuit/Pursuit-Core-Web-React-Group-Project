const db = require("../../database/index");

const getAllTags = async (req, res, next) => {
  try {
    let tags = await db.one(`SELECT * FROM tags`);
    res.status(200).json({
      status: "success",
      tags,
      message: "all tags"
    });
  } catch (error) {
    console.log(error);
  }
};

const createTag = async (req, res, next) => {
  try {
    await db.none(`INSERT INTO tags (post_id,tag)
    Values('${req.body.post_id}','${req.body.tag}')`);
    res.status(200).json({
      status: "ok",
      message: "new tag created"
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTag = async (req, res, next) => {
  try {
    await db.any(`DELETE FROM tags WHERE id = ${req.params.id}`);
    res.status(200).json({
      status: "ok",
      message: "tag deleted"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTags, createTag, deleteTag };
