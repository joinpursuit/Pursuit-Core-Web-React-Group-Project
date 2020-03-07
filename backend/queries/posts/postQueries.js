const db = require("../../database/index");

const getAllPosts = async (req, res, next) => {
  try {
    let posts = await db.one("SELECT * FROM posts");
    res.status(200).json({
      status: "success",
      posts,
      message: "all posts"
    });
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    let posts = await db.one(`SELECT * FROM posts WHERE id = ${req.params.id}`);
    res.status(200).json({
      status: "success",
      posts,
      message: "all posts for user"
    });
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    await db.none(`INSERT INTO posts (caption,poster_id,created_at)
    Values(${req.body.caption},${req.body.poster_id},${req.body.created_at})`);
    res.status(200).json({
      status: "ok",
      message: "new post created"
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    await db.any(`DELETE FROM posts WHERE id = ${req.params.id}`);
    res.status(200).json({
      status: "ok",
      message: "user deleted"
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  //   getTagOfPost,
  //   getPostByTag,
  //   getPicturesOfPost,
  createPost,
  deletePost
};
