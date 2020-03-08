const db = require("../../../database/index");

const getPictureOfPost = async (req, res, next) => {
  try {
    let picture = await db.one(
      "SELECT * FROM posts LEFT JOIN pictures ON posts.id = pictures.post_id WHERE posts.id=$1",
      req.params.id
    );
    res.status(200).json({
      status: "ok",
      picture,
      message: "picture returned"
    });
  } catch (error) {
    if (!error.recieved) {
      res.json({
        status: 404
      });
    }

    next(error);
  }
};

module.exports = getPictureOfPost;
