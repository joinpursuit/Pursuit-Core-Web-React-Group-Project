const db = require("../../../database/index");

const getPictureOfPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    let picture = await db.one("SELECT * FROM pictures WHERE post_id=$1", id);

    res.status(200).json({
      status: "ok",
      picture,
      message: "Retrieved pictures for post"
    });
    
  } catch (error) {
    if(error.received === 0) {
      res.status(404).json({
        status: 404,
        error: `Post ID: ${id} has no pictures`
      })
    }
    next(error);
  }
};

module.exports = getPictureOfPost;
