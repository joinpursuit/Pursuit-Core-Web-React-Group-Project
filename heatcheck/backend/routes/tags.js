const tags = require("express").Router()
const {getAllTags} = require("../queries/tags.js")

tags.get("/", getAllTags)

module.exports = tags