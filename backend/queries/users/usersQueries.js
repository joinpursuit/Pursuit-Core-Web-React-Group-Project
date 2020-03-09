const db = require("../../database/index");

const isUserExisting = async (req, res, next) => {
  const getId = req.params.id;
  const postId = req.body.poster_id;
  const id = getId ? getId : postId;
  try {
    if(!id) {
      throw {status: 400, error: "No ID given."}
    } else {
      let user = await db.one("SELECT * FROM users WHERE id=$1", id);
      next();
    }
  } catch (error) {
    if(error.received === 0) {
      res.status(404).json({status: 404, error: `User ID: ${id} doesn't exist`})
    } else {
      next(error);
    }
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM users");
    if(users.length) {
      res.status(200).json({
        status: "success",
        users,
        message: "Retrieved all users"
      });
    } else {
      throw { status: 404, error: "No users found"}
    }

  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await db.one("SELECT * FROM users WHERE id=$1", id);
    res.status(200).json({
      status: "ok",
      user,
      message: "user retrieved"
    });
  } catch (error) {
    next(error);
  }
};

const logIn = async (req, res, next) => {
  const { email } = req.body;
  try {
    let user = await db.one(`SELECT * FROM users WHERE email=$1`, email);
    res.status(200).json({
      status: "ok",
      user,
      message: "user retrived by email"
    });
  } catch (error) {
    if(error.received === 0) {
      res.status(404).json({
        status: 404,
        error: `User Email: '${email}' doesn't exist`
      })
    }
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, profile_pic } = req.body;
    let user;

    if(username) {
      user = await db.one(`UPDATE users SET username=$1 WHERE id=$2 RETURNING *`, [username, id]);
    }

    if(profile_pic) {
      user = await db.one(`UPDATE users SET profile_pic=$1 WHERE id=$2 RETURNING *`, [profile_pic, id]);
    }

    if (user) {
      res.status(200).json({
        status: "ok",
        user,
        message: "Updated user"
      });
    } else {
      res.status(400).json({
        status: 400,
        error: "No updates made"
      })
    }

  } catch (error) {
    next(error);
  }
};

const createNewUser = async (req, res, next) => {
  try {
    const {
      full_name,
      email,
      username,
      bio,
      website,
      profile_pic,
      favorite_artist,
      art_type
    } = req.body;

    let user = await db.one(`INSERT INTO users 
                          (full_name, email, username, bio, website, profile_pic, favorite_artist, art_type)
                          VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, 
                          [full_name, email, username, bio, website, profile_pic, favorite_artist, art_type]);

    res.status(200).json({
      success: "ok",
      user,
      message: "Created new user"
    });
  } catch (error) {
    if(error.constraint === "users_email_key") {
      res.status(400).json({
        status: 400,
        error: "User with that email exists"
      })

    } else if(error.constraint === "users_username_key") {
      res.status(400).json({
        status: 400,
        error: "User with that username exists"
      })
    }
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await db.one(`DELETE FROM users WHERE id=$1 RETURNING *`, id);
    res.status(200).json({
      status: "ok",
      user,
      message: "Deleted user"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  logIn,
  updateUser,
  createNewUser,
  deleteUser,
  isUserExisting
};
