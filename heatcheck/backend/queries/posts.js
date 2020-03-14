const db = require("../db/index");

const getposts = async (req, res, next) => {
  try {
    let posts = await db.any(
      "SELECT *,(SELECT ARRAY_AGG(users.user_name)AS user_name FROM users WHERE user_id = users.id),(SELECT ARRAY_AGG(users.profile_pic)AS profilepic FROM users WHERE user_id = users.id),(SELECT ARRAY_AGG(comments.user_id)AS commenter FROM comments WHERE posts.user_id = comments.post_id),(SELECT ARRAY_AGG(comments.id)AS commentID FROM comments WHERE posts.user_id = comments.post_id),(SELECT ARRAY_AGG(comments.body)AS comment FROM comments WHERE posts.user_id = comments.post_id),(SELECT ARRAY_AGG(comments.time_stamp)AS comment_time FROM comments WHERE posts.id = comments.id),(SELECT ARRAY_AGG(reactions.user_id)AS reactor FROM reactions WHERE posts.id = post_id),(SELECT ARRAY_AGG(reactions.reaction)AS reaction FROM reactions WHERE posts.id = post_id) FROM posts"
    );

    res.status(200).json({
      status: "success",
      message: "selected all posts",
      payload: posts
    });
  } catch (error) {
    next(error);
  }
};

const getpost = async (req, res, next) => {
  try {
    let post = await db.any(
      "SELECT *,(SELECT ARRAY_AGG(users.user_name)AS user_name FROM users WHERE user_id = users.id),(SELECT ARRAY_AGG(users.profile_pic)AS profilepic FROM users WHERE user_id = users.id),(SELECT ARRAY_AGG(comments.user_id)AS commenter FROM comments WHERE posts.user_id = comments.post_id),(SELECT ARRAY_AGG(comments.id)AS commentID FROM comments WHERE posts.user_id = comments.post_id),(SELECT ARRAY_AGG(comments.body)AS comment FROM comments WHERE posts.user_id = comments.post_id),(SELECT ARRAY_AGG(comments.time_stamp)AS comment_time FROM comments WHERE posts.id = comments.id),(SELECT ARRAY_AGG(reactions.user_id)AS reactor FROM reactions WHERE posts.id = post_id),(SELECT ARRAY_AGG(reactions.reaction)AS reaction FROM reactions WHERE posts.id = post_id) FROM posts WHERE user_id=$1",
      [req.params.userId]
    );
    res.status(200).json({
      status: "success",
      message: `select posts from ${req.params.userId}`,
      payload: post
    });
  } catch (error) {
    next(error);
  }
};


const trendingtags = async (req, res, next) => {
  try {
    let posts = await db.any(
      "SELECT posts.tag, COUNT(posts.tag) FROM posts GROUP BY posts.tag ORDER BY COUNT(*) DESC LIMIT 5"
    );

    res.status(200).json({
      status: "success",
      message: "selected all posts",
      payload: posts
    });
  } catch (error) {
    next(error);
    console.log(error);
    
  }
};

const getpostbytag = async (req, res, next) => {
  try {
    let post = await db.any(
      "SELECT * FROM posts WHERE tag = $1",
      [req.params.tag]
    );
    res.status(200).json({
      status: "success",
      message: `select posts from ${req.params.tag}`,
      payload: post
    });
  } catch (error) {
    next(error);
  }
};


const newpost = async (req, res, next) => {
  try {
    let info = req.body;
    let post = await db.one(
      "INSERT INTO posts (user_id, image, brand, description, release_date, colorway, tag) VALUES (${user_id}, ${image}, ${brand}, ${description}, ${release_date}, ${colorway},${tag}) RETURNING *",
      info
    );
    res.status(200).json({
      status: "success",
      message: "post created ",
      payload: post
    });
  } catch (error) {
    next(error);
  }
};

const editPost = async (req, res, next) => {
  try {
    let editedPost = await db.any(
      `UPDATE posts SET description = '${req.body.description}' WHERE id=${req.params.id} RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: "post edited",
      payload: editedPost
    });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    let deletedPost = await db.any(
      `DELETE FROM posts WHERE id = ${req.params.id} RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: "post deleted",
      payload: deletedPost
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getposts, getpost, trendingtags, getpostbytag, newpost, editPost, deletePost };
