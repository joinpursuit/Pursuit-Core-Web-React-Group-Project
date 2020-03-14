const tags = require("express").Router()
const {getAllTags, trendingTags, getTagsByName, postTag, deleteTag} = require("../queries/tags.js")

tags.get("/", getAllTags)

tags.get("/trending", trendingTags)

tags.get("/:tagName", getTagsByName)

tags.post("/", postTag)

tags.delete("/:id", deleteTag)

module.exports = tags