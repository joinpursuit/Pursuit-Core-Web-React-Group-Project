const db = require("../../../database/index");

const getTagOfPost = async (req, res, next) => {
  try {
    let tags = await db.any(
      " SELECT tag,id FROM tags WHERE post_id =$1",
      req.params.id
    );
    res.status(200).json({
      status: "ok",
      tags,
      message: "tags returned"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTagOfPost;
