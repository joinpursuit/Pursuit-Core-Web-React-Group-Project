const db = require('../db/index.js');

const getAllReactionsByUserId = async (userId) => {
    try{
        const requestQuery = `
            SELECT reactions.id AS reaction_id
                ,user_id
                ,post_id
                ,reaction
            FROM reactions JOIN users ON (user_id = users.id)
            WHERE user_id = $1
            ORDER BY user.id ASC`
        return await db.any(requestQuery, userId)
    }catch(err) {
        throw err
    }
}

const getAllReactionsByPostId = async (postId) => {
    try {
        const requestQuery = `
            SELECT reactions.id AS reaction_id
                ,user_id
                ,post_id
                ,reaction
            FROM reactions JOIN users ON (user_id = users.id)
            WHERE user_id = $1
            ORDER BY users.id ASC`
        return await db.any(requestQuery, postId)
    } catch (err) {
        throw err
    }
}

const getOneReactionByPostId = async (postId) => {
    try {
        const requestQuery = `
            SELECT *
            FROM reactions
            WHERE post_id = $1`
        return await db.one(requestQuery, [postId])
    } catch (err) {
        throw err
    }
}

const addReactionToPost = async (postId) => {
    try {
        const requestQuery = `
            INSERT INTO reactions
                (post_id)
            VALUES
                ($1)
            RETURNING *`
        return await db.one(requestQuery, [postId])
    } catch (err) {
        throw err
    }
}


const deleteReaction = async (reactionId, postId) => {
    try {
        const requestQuery = `
        DELETE FROM reactions
        WHERE id = $1
        RETURNING *`
        return await db.one(requestQuery, [reactionId, postId])
    } catch (err) {
        throw err
    }
}

module.exports = {
    getAllReactionsByUserId,
    getAllReactionsByPostId,
    getOneReactionByPostId,
    addReactionToPost,
    deleteReaction
}