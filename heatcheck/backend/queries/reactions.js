const db = require('../db/index.js');

const getAllReactionsByPostId = async (postId) => {
    try {
        const requestQuery = `
            SELECT reactions.id AS reaction_id
                , emoji_type
                , reactor_id
                , username
                , post_id
                , reactions.time_created
            FROM reactions JOIN users ON (reactor_id = users.id)
            WHERE post_id = $1
            ORDER BY reactions.id ASC`
        return await db.any(requestQuery, postId)
    } catch (err) {
        throw err
    }
}

const getOneReactionByPostId = async (postId, reactorId) => {
    try {
        const requestQuery = `
            SELECT *
            FROM reactions
            WHERE post_id = $1
            AND reactor_id = $2`
        return await db.one(requestQuery, [postId, reactorId])
    } catch (err) {
        throw err
    }
}

const addReactionToPost = async (postId, reactorId, emojiType) => {
    try {
        const requestQuery = `
            INSERT INTO reactions
                (post_id, reactor_id, emoji_type)
            VALUES
                ($1, $2, $3)
            RETURNING *`
        return await db.one(requestQuery, [postId, reactorId, emojiType])
    } catch (err) {
        throw err
    }
}


const deleteReaction = async (reactionId, reactorId) => {
    try {
        const requestQuery = `
        DELETE FROM reactions
        WHERE id = $1
        AND reactor_id = $2 
        RETURNING *`
        return await db.one(requestQuery, [reactionId, reactorId])
    } catch (err) {
        throw err
    }
}

module.exports = {
    getAllReactionsByPostId,
    getAllReactionsByCommentId,
    getOneReactionByCommentId,
    getOneReactionByPostId,
    addReactionToPost,
    addReactionToComment,
    deleteReaction
}