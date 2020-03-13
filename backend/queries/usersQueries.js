const db = require("../db/index");

const getAllUsers = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Got all Users",
      body: {
        users: await db.any("SELECT * FROM users")
      }
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "Could not get all users"
    });
    next(error);
  }
};

const getSingleUserById = async (req, res, next) => {
  try {
    let { id } = req.params;
    res.status(200).json({
      status: "Success",
      message: "Got a single User",
      body: {
        single_user: await db.one("SELECT * FROM users where id = $1", [id])
      }
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "No user found!"
    });
    next(error);
  }
};

const insertSingleUser = async (req, res, next) => {
  try {
    let {
      username,
      password,
      full_name,
      email_address,
      profile_pic_url,
      bio
    } = req.body;
    console.log(req.body);

    let user = await db.one(
      "INSERT INTO users (username, password, full_name, email_address, profile_pic_url, bio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [username, password, full_name, email_address, profile_pic_url, bio]
    );
    res.status(200).json({
      status: "Success",
      message: "Created new user",
      body: {
        user
      }
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "Username already exists"
    });
    next(error);
  }
};

const deleteUsersById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await db.one("DELETE FROM users WHERE id = $1 RETURNING *", id);
    res.status(200).json({
      status: "Success",
      message: "Deleted user with id: " + id,
      body: {
        user
      }
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "User could not be deleted"
    });
    next(error);
  }
};

const searchUserByName = async (req, res, next) => {
  try {
    let { username } = req.params;
    let user = await db.one(
      "SELECT * FROM users WHERE username = $1",
      username
    );
    if (user) {
      res.status(200).json({
        status: "Success",
        message: "Searched for user by username: " + username,
        body: {
          user
        }
      });
    }
  } catch (error) {
    res.json({
      status: "Error",
      message: "No results found"
    });
    next(error);
  }
};

const updateUserById = async (req, res, next) => {
  const {id} = req.params;
  const { username, full_name, bio, email_address} = req.body;
  try {
    let user = await db.one("UPDATE users SET username=$1, full_name=$2, bio=$3, email_address=$4 WHERE id=#5", [username, fullname, bio, email_address, id] )
    res.status(200).json({
      status:
    })
  } catch (error) {
    res.json({
      status: "Error",
      message: "Couldn't update user"
    });
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getSingleUserById,
  insertSingleUser,
  deleteUsersById,
  searchUserByName,
  updateUserById
};
