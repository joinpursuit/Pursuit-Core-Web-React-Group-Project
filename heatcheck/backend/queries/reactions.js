const dataBase = require("../db/index.js")

const getReactions = async (req, res, next) => {
    try {
      let reactions = await dataBase.any(
        "SELECT reactions.user_id, reactions.post_id, reactions.reaction FROM reactions LEFT JOIN users ON reactions.user_id = reactions.id;"
      );
  
      res.status(200).json({
        status: "success",
        message: "selected all reactions",
        payload: reactions
      });
    } catch (error) {
      next(error);
    }
  };
  
  const getSingleReaction = async (req, res, next) => {
    try {
      let reaction = await dataBase.any(
        "SELECT reactions.id,reactions.user_id, reactions.post_id, reactions.reaction FROM posts LEFT JOIN users ON reactions.user_id = users.id WHERE user_id=$1",
        [req.params.userId]
      );
      res.status(200).json({
        status: "success",
        message: `select reactions from ${req.params.userId}`,
        payload: reaction
      });
    } catch (error) {
      next(error);
    }
  };
  
  const newReaction = async (req, res, next) => {
    try {
      await dataBase.none(
        `INSERT INTO reactions (user_id, post_id, reaction) VALUES ('${req.body.user_id}','${req.body.post_id}','${req.body.reaction}' )`
      );
      res.status(200).json({
        status: "success",
        message: "Reaction created "
      });
    } catch (error) {
      next(error);
    }
  };
  
  const editReaction = async (req, res, next) => {
    try {
      let editedReaction = await dataBase.any(
        `UPDATE reactions SET body = '${req.body.reaction}' WHERE id=${req.params.id} RETURNING *`
      );
      res.status(200).json({
        status: "success",
        message: "post edited",
        payload: editedReaction
      });
    } catch (error) {
      next(error);
    }
  };
  
  const deleteReaction = async (req, res, next) => {
    try {
      let deletedReaction = await dataBase.any(
        `DELETE FROM reactions WHERE id = ${req.params.id} RETURNING *`
      );
      res.status(200).json({
        status: "success",
        message: "reaction deleted",
        payload: deletedReaction
      });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = { getReactions, getSingleReaction, newReaction, editReaction, deleteReaction };
  