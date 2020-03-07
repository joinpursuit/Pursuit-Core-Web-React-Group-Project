const tags = require("express").Router()
const {getAllTags, getTagsByName, postTag, deleteTag} = require("../queries/tags.js")

tags.get("/", getAllTags)

tags.get("/:tagName", getTagsByName)

tags.post("/", postTag)

tags.delete("/:id", deleteTag)

module.exports = tags