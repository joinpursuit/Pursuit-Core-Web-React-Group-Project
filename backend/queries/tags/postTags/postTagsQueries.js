const db = require("../../../database/index");

const getPostByTag = async (req, res, next) => {
  try {
    let postsByTag = await db.one(
      "SELECT *, tags.id FROM tags LEFT JOIN posts ON posts.id = tags.post_id WHERE tag LIKE $1 ",
      req.params.tagName
    );

    res.status(200).json({
      status: "ok",
      message: "all tags by post",
      postsByTag
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPostByTag;
