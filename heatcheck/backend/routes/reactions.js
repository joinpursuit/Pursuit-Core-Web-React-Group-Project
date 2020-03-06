const express = require('express');
const router = express.Router();

const {
    getAllReactionsByPostId,
    getOneReactionByPostId,
    addReactionToPost,
    deleteReaction
} = require('../queries/reactions.js');

const handleError = (response, err) => {
    if (err.message === "No data returned from the query.") {
        response.status(404)
        response.json({
            status: 'fail',
            message: 'Unexpected route',
            payload: null,
        })
    } else if (err.constraint === 'comments_post_id_fkey') {
        response.status(404)
        response.json({
            status: 'fail',
            message: 'Wrong route',
            payload: null,
        })
    } else { 
        console.log(err)
        response.status(500)
        response.json({
            status: 'fail',
            message: 'Sorry, Something Went Wrong (BE)',
            payload: null,
        })
    }
}

const isValidId = (id) => {
    if (!isNaN(parseInt(id)) && id.length === (parseInt(id) + '').length) {
        return true
    }
    return false
}

const isUserAllowed = async (response, id, password) => {
    try {
        return await authenticateUser(id, password)
    } catch (err) {
        console.log(err)
        if (err.message === "No data returned from the query.") {
            return false
        } else {
            handleError(response, err)
        }
    }
}

//GET ALL REATIONS BY USER ID

router.get('/users/all/:userId', async (request, response) => {
    const userId = request.params.userId;
    const validId = isValidId(userId);

    if (!validId) {
        response.status(404)
            response.json({
                status: 'fail',
                message: 'wrong route',
                payload: null,
            })
    }else{
        try{
            const allReactionsByUserId = await allReactionsByUserId
            if(allReactionsByUserId.length) {
                response.json({
                    status: 'success',
                    message: 'Successfully retrieved all reactions for one user',
                    payload: allReactionsByUserId,
                })
            }else {
                response.json({
                    status: 'success',
                    message: 'No reactions returned',
                    payload: [],
                })
            }
        }catch (err) {
            handleError(response, err)
        }
    }
})


// GET ALL REACTIONS BY POST ID

router.get('/post/all/:postId', async (request, response) => {
    const postId = request.params.postId;
    const validId = isValidId(postId);

    if (!validId) {
        response.status(404)
            response.json({
                status: 'fail',     
                message: 'Wrong route',
                payload: null,
            })
    } else {
        try {
            const allReactionsByPostId = await getAllReactionsByPostId(postId);
            if (allReactionsByPostId.length) {
                response.json({
                    status: 'success',
                    message: `Successfully retrieved all reactions related to the post: ${postId}`,
                    payload: allReactionsByPostId,
                })
            } else {
                response.json({
                    status: 'success',
                    message: 'No reactions returned.',
                    payload: [],
                })
            }
        } catch (err) {
            handleError(response, err)
        }
    }
})

// GET SINGLE REACTION BY POST ID

router.get('/post/:postId/:reactorId', async (request, response) => {
    const postId = request.params.postId;
    const reactorId = request.params.reactorId;
    const validPostId = isValidId(postId);
    const validReactorId = isValidId(reactorId);

    if (!validPostId || !validReactorId) {
        response.status(404)
            response.json({
                status: 'fail',     
                message: 'Wrong route',
                payload: null,
            })
    } else {
        try {
            const reactionByPostId = await getOneReactionByPostId(postId, reactorId);
            response.json({
                status: 'success',
                message: `Successfully retrieved the reaction related to the post: ${postId}`,
                payload: reactionByPostId,
            })
        } catch (err) {
            handleError(response, err)
        }
    }
})

// ADD A REACTION TO A SPECIFIC POST

router.post('/add/post/:postId', async (request, response) => {
    const postId = request.params.postId;
    const { password, reactorId, emojiType } = request.body;
    const validPostId = isValidId(postId);
    const validReactorId = isValidId(reactorId);

    if (!validPostId || !validReactorId) {
        response.status(404)
        response.json({
            status: 'fail',     
            message: 'Wrong route',
            payload: null,
        })
    } else {
        try {
            const userAllowed = await isUserAllowed(response, reactorId, password)
            if (!userAllowed) {
                response.status(401)
                    response.json({
                        status: 'fail',
                        message: 'Authentication issue',
                        payload: null,
                    })
            } else {
                try {
                    const addReactionToSpecificPost = await addReactionToPost(postId, reactorId, emojiType);
                    response.status(201)
                    response.json({
                        status: 'success',
                        message: `Successfully added a reaction to the post: ${postId}`,
                        payload: addReactionToSpecificPost,
                    })
                } catch (err) {
                    handleError(response, err)
                }
            }
        } catch (err) {
            handleError(response, err)
        }
    }
})

// DELETE A REACTION

router.patch('/delete/:reactionId', async (request, response) => {
    const reactionId = request.params.reactionId;
    const reactorId = request.body.reactorId;
    const password = request.body.password;
    const validReactionId = isValidId(reactionId);
    const validReactorId = isValidId(reactorId);

    if (!validReactionId || !validReactorId) {
        response.status(404)
        response.json({
            status: 'fail',     
            message: 'Wrong route',
            payload: null,
        })
    } else {
        try {
            const userAllowed = await isUserAllowed(response, reactorId, password)
            if (!userAllowed) {
                response.status(401)
                    response.json({
                        status: 'fail',
                        message: 'Authentication issue',
                        payload: null,
                    })
            } else {
                try {
                    const deleteExistingReaction = await deleteReaction(reactionId, reactorId);
                    response.json({
                        status: 'success',
                        message: `Successfully deleted the reaction: ${reactionId}`,
                        payload: deleteExistingReaction,
                    })
                } catch (err) {
                    handleError(response, err)
                }
            }
        } catch (err) {
            handleError(response, err)
        }
    }
})

module.exports = router