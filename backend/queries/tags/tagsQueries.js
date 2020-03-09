const db = require("../../database/index");

const getAllTags = async (req, res, next) => {
  try {
    let tags = await db.one(`SELECT * FROM tags`);
    res.status(200).json({
      status: "success",
      tags,
      message: "all tags"
    });
  } catch (error) {
    console.log(error);
  }
};

const getTagByName = async (req, res, next) => {
  const { tag } = req.params;
  try {
    let posts = await db.any(`SELECT *, tags.id AS id, posts.id AS post_id, users.id AS poster_id FROM tags 
                              LEFT JOIN posts ON posts.id=tags.post_id 
                              LEFT JOIN users ON users.id=posts.poster_id WHERE tag=$1`, tag);
    if(posts.length) {
      res.status(200).json({
        status: "ok",
        posts,
        message: "Retrieved all posts by search"
      })
    } else {
      throw {status: 404, error: `No tags found by search: ${tag}`}
    }
  } catch(error) {
    next(error);
  }
}

const createTag = async (req, res, next) => {
  try {
    await db.none(`INSERT INTO tags (post_id,tag)
    Values('${req.body.post_id}','${req.body.tag}')`);
    res.status(200).json({
      status: "ok",
      message: "new tag created"
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTag = async (req, res, next) => {
  try {
    await db.any(`DELETE FROM tags WHERE id = ${req.params.id}`);
    res.status(200).json({
      status: "ok",
      message: "tag deleted"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTags, getTagByName, createTag, deleteTag };
