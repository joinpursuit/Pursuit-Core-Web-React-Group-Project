const db = require("../../database/index");

const getAllUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM users");
    res.status(200).json({
      status: "success",
      users,
      message: "all users"
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    let user = await db.one("SELECT * FROM users WHERE id=$1", req.params.id);
    res.status(200).json({
      status: "ok",
      user,
      message: "user retrieved"
    });
  } catch (error) {
    console.log(error);
  }
};

const logIn = async (req, res, next) => {
  try {
    let email = await db.one(
      `SELECT * FROM users WHERE email = '${req.body.email}'`
    );
    res.status(200).json({
      status: "ok",
      email,
      message: "user retrived by email"
    });
  } catch (error) {
    console.log(error);
  }
};
//  const getPostByUser = async (req, res, next) => {
//     try {
//         let posts = await db.one(

//         )

//     } catch (error) {
//         console.log(err)
//     }
//  }

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
    console.log(error);
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
    // Handling error to make our frontend more reactive
    console.log("users_username_key" === error.constraint);
    console.log(error);
    // next(error);
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
  deleteUser
};
