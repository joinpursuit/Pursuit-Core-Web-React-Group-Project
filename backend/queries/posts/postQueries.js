const db = require("../../database/index");

const isPostExisting = async (req, res, next) => {
  const getId = req.params.id;
  const postId = req.body.post_id;
  const id = getId ? getId : postId;
  try {
    if(!id) {
      next();
    } else {
      let post = await db.one("SELECT * FROM posts WHERE id=$1", id);
      next();
    }
  } catch (error) {
    if(error.received === 0) {
      res.status(404).json({status: 404, error: `Post ID: ${id} doesn't exist`})
    } else {
      next(error);
    }
  }
}

const getAllPosts = async (req, res, next) => {
  try {
    let posts = await db.any("SELECT * FROM posts");
    if(posts.length) {
      res.status(200).json({
        status: "success",
        posts,
        message: "all posts"
      });
    } else {
      throw { status: 404, error: "No posts found." }
    }
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let posts = await db.one(`SELECT * FROM posts WHERE id = $1`, id);
    res.status(200).json({
      status: "success",
      posts,
      message: "all posts for user"
    });
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  const {caption, poster_id, created_at} = req.body;
  try {
    let post = await db.one(`INSERT INTO posts (caption, poster_id, created_at) 
                              VALUES($1 ,$2,$3) RETURNING *`, [caption, poster_id, created_at]);
    res.status(200).json({
      status: "ok",
      post,
      message: "new post created"
    });
  } catch (error) {
    next(error);
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
  createPost,
  deletePost,
  isPostExisting
};
