const reactions = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  newReaction,
  editReaction,
  deleteReaction
} = require("../../backend/queries/reactions.js");

posts.get("/", getReactions); //get all Reactions
posts.get("/:userId", getSingleReaction); //Get single Reaction
posts.post("/", newReaction); //Add single Reaction
posts.patch("/:id", editReaction); //Edit single Reaction.
posts.delete("/:id", deleteReaction);

module.exports = reactions;
