const db = require("../db/index.js");

const getAllHashtagsBySinglePost = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Got all hashtags by single post_id",
      body: {
        post_id: req.params.post_id,
        result: await db.any(
          "SELECT * FROM hashtags WHERE post_id = $1",
          req.params.post_id
        )
      }
    });
  } catch (error) {
    res.json({
      error: error
    });
    next(error);
  }
};

const insertHashtagOnSinglePost = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Add a hashtag to post_id",
      body: {
        post_id: req.params.post_id,
        result: await db.one(
          "INSERT INTO hashtags (owner_id, post_id, body) VALUES($1, $2, $3) RETURNING *",
          [req.params.owner_id, req.params.post_id, req.body.body]
        )
      }
    });
  } catch (error) {
    res.json({
      error: error
    });
    next(error);
  }
};

const deleteHashtagOnSinglePost = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Deleted hashtag from post_id",
      body: {
        id: req.params.id,
        post_id: req.params.post_id,
        result: await db.one(
          "DELETE FROM hashtags WHERE owner_id=$1 AND post_id=$2 AND id=$3 RETURNING *",
          [req.params.owner_id, req.params.post_id, req.params.id]
        )
      }
    });
  } catch (error) {
    res.json({
      error: error
    });
    next(error);
  }
};

module.exports = {
  getAllHashtagsBySinglePost,
  insertHashtagOnSinglePost,
  deleteHashtagOnSinglePost
};
