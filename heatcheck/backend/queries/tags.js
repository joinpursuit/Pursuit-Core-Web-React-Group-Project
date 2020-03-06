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

module.exports = {getAllTags, getTagsByName}