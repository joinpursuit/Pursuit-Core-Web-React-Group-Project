const db = require("../../../database/index");

const getPostByUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    let posts = await db.any(`SELECT * , posts.id FROM posts LEFT JOIN users ON users.id = posts.poster_id 
                             WHERE poster_id=$1 ORDER BY created_at DESC`, id);
    if (posts.length) {
      res.status(200).json({
        status: "ok",
        posts,
        message: "Retrieved all posts by user"
      });
    } else {
      throw { status: 404, error: `User ID: ${id} has no posts` };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getPostByUser;
