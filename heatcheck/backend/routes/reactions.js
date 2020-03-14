const reactions = require("express").Router();
const {
  getReactions,
  getSingleReaction,
  newReaction,
  editReaction,
  deleteReaction,
  getPostReactions
} = require("../../backend/queries/reactions.js");

reactions.get("/", getReactions); //get all Reactions
reactions.get("/:postId", getPostReactions); //Get single Reaction
reactions.post("/", newReaction); //Add single Reaction
reactions.patch("/:id", editReaction); //Edit single Reaction.
reactions.delete("/:id", deleteReaction);
// reactions.get("/posts/:postId", getReactions);

module.exports = reactions;
