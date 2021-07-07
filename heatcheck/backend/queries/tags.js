const db = require ("../db/index.js")

const getAllTags = async (req, res, next) => {
  try {
    let tags = await db.any ("SELECT * FROM tags")
    res.status(200).json({
      status: "success",
      message: "Retrieved all tags.",
      payload: tags
    })
  } catch(err){
    res.status(404).json({
      status: "error",
      message: "There were no tags found.",
      payload: null
    })
  }
}

const trendingTags = async (req, res, next) => {
  try {
    let tags = await db.any ("SELECT tags.tag, COUNT(tags.tag) FROM tags GROUP BY tags.tag ORDER BY COUNT(*) DESC LIMIT 5")
    res.status(200).json({
      status: "success",
      message: "Retrieved all tags.",
      payload: tags
    })
  } catch(err){
    res.status(404).json({
      status: "error",
      message: "There were no tags found.",
      payload: null
    })
  }
}

const getTagsByName = async (req, res, next) => {
  try{
    let {tagName} = req.params
    let tags = await db.any("SELECT * FROM tags WHERE tag = $1", tagName)
    if(tags.length > 0) {
      res.status(200).json({
        status: "success",
        message: "Retrieved all tags by name.",
        payload: tags
      })
    } else {
      res.status(404).json({
        status: "error",
        message: "There are no tags by that name.",
        payload: null
      })
    }
  } catch(err){
    res.status(500).json({
      status: "error",
      message: "Unable to retrieve any tags.",
      payload: null
    })
  }
}

const postTag = async (req, res, next) => {
  try{
    let info = req.body
    let tag = await db.one("INSERT INTO tags (post_id, user_id, tag) VALUES (${post_id}, ${user_id}, ${tag}) RETURNING *", info)
    res.status(200).json({
      status: "success",
      message: "Created new tag.",
      payload: tag
    })
  } catch(err){
    res.status(500).json({
      status: "error",
      message: "Unable to create new tag",
      payload: null
    })
  }
}

const deleteTag = async (req, res, next) => {
  try{
    let {id} = req.params
    let tag = await db.one("DELETE FROM tags WHERE id = $1 RETURNING *", id)
    res.status(200).json({
      status: "success",
      message: "The tag has been deleted.",
      payload: tag
    })
  } catch(err){
    res.status(404).json({
      status: "error",
      message: "That tag has already been deleted",
      payload: null
    })
  }
}

module.exports = {getAllTags, trendingTags, getTagsByName, postTag, deleteTag}