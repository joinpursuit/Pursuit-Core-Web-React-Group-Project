const tags = require("express").Router()
const {getAllTags, getTagsByName} = require("../queries/tags.js")

tags.get("/", getAllTags)

tags.get("/:tagName", getTagsByName)

module.exports = tags