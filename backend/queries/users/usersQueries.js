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
  try {
    let email = await db.one(
      `SELECT * FROM users WHERE email=$1`, req.body.email);
    res.status(200).json({
      status: "ok",
      user: email,
      message: "user retrived by email"
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Using db.any to manually handle our errors
    let dbResponse = await db.any(
      `UPDATE users
        SET username = '${req.body.newUserName}'
        WHERE id = '${id}' RETURNING *`
    );

    // If our db.any returns an array with length then we successfully updated. Otherwise the ID doesn't exist
    if (dbResponse.length) {
      res.status(200).json({
        status: "ok",
        message: "user updated"
      });
    } else {
      throw { status: 404, error: "user doesnt exist" };
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
    await db.none(`INSERT INTO users (full_name, email, username, bio, website, profile_pic, favorite_artist, art_type)
        VALUES ('${full_name}', '${email}', '${username}', '${bio}', '${website}', '${profile_pic}', '${favorite_artist}', '${art_type}');`);

    res.status(200).json({
      success: "pass"
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await db.any(`DELETE FROM users WHERE id = ${req.params.id}`);
    res.status(200).json({
      status: "ok",
      message: "user deleted"
    });
  } catch (error) {
    console.log(error);
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
