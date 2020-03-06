const getposts = async (req, res, next) => {
  try {
    let posts = await dataBase.any(
      "SELECT posts.id,posts.image, posts.brand, posts.description, posts.release_date,posts.colorway, posts.user_id, users.user_name FROM posts LEFT JOIN users ON posts.user_id = users.id;"
    );

    res.status(200).json({
      status: "success",
      message: posts
    });
  } catch (error) {
    next(error);
  }
};

const getpost = async (req, res, next) => {
  try {
    let post = await dataBase.any(
      "SELECT posts.id,posts.image, posts.brand, posts.description, posts.release_date,posts.colorway, posts.user_id, users.user_name FROM posts LEFT JOIN users ON posts.user_id = users.id WHERE user_id=$1",
      [req.params.userId]
    );
    res.status(200).json({
      status: "success",
      message: post
    });
  } catch (error) {
    next(error);
  }
};

const newpost = async (req, res, next) => {
  try {
    await dataBase.none(
      `INSERT INTO posts (user_id, image, brand, description, release_date, colorway) VALUES ('${req.body.user_id}','${req.body.image}','${req.body.brand}',${req.body.description},${req.body.release_date},${req.body.colorway} )`
    );
    res.status(200).json({
      status: "success",
      message: "post created "
    });
  } catch (error) {
    next(error);
  }
};

const editPost = async (req, res, next) => {
  try {
    let editedPost = await dataBase.any(
      `UPDATE posts SET body = '${req.body.description}' WHERE id=${req.params.id} RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: editedPost
    });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    let deletedPost = await dataBase.any(
      `DELETE FROM posts WHERE id = ${req.params.id} RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: deletedPost
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getposts, getpost, newpost, editPost, deletePost };
