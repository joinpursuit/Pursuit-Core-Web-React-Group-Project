const db = require("../../../database/index");

const getPostByUser = async (req, res, next) => {
  try {
    let posts = await db.any(
      `SELECT * , posts.id
            FROM posts 
            LEFT JOIN users
            ON users.id = posts.poster_id WHERE poster_id=$1`,
      req.params.id
    );
    if (posts.length) {
      res.status(200).json({
        posts,
        message: "all posts by users returned"
      });
    } else {
      throw { status: 404, error: "posts not found" };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getPostByUser;
