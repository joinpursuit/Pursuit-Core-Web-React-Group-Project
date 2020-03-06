const tags = require("express").Router()
const {getAllTags, getTagsByName, postTag} = require("../queries/tags.js")

tags.get("/", getAllTags)

tags.get("/:tagName", getTagsByName)

tags.post("/", postTag)

module.exports = tags