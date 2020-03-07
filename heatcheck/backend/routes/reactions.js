const reactions = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  newReaction,
  editReaction,
  deleteReaction
} = require("../../backend/queries/reactions.js");

reactions.get("/", getReactions); //get all Reactions
reactions.get("/:userId", getSingleReaction); //Get single Reaction
reactions.post("/", newReaction); //Add single Reaction
reactions.patch("/:id", editReaction); //Edit single Reaction.
reactions.delete("/:id", deleteReaction);

module.exports = reactions;
