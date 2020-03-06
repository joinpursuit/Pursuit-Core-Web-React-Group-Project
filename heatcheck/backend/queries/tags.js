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

module.exports = {getAllTags}