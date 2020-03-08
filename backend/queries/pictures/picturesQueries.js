const db = require("../../database/index");

const getAllPics = async (req, res, next) => {
  try {
    let pictures = await db.any(`SELECT * FROM pictures`);
    if(pictures.length) {
      res.status(200).json({
        status: "success",
        pictures,
        message: "Retrieve all pictures"
      });
    } else {
      throw {status: 404, error: "No pictures found"};
    }

  } catch (error) {
    next(error);
  }
};

const addPic = async (req, res, next) => {
  try {
    const { body } = req;
    const { post_id, picture } = body;
    let pictures = await db.one(`INSERT INTO pictures (post_id,picture) VALUES($1,$2) RETURNING *`, [post_id, picture]);
    res.status(200).json({
      status: "ok",
      pictures,
      message: "New picture added."
    });
  } catch (error) {
    next(error);
  }
};

const deletePic = async (req, res, next) => {
  try {
    const { params } = req;
    const { id } = params;
    let picture = await db.one(`DELETE FROM pictures WHERE id = $1 RETURNING *`, id);
    res.status(200).json({
      status: "ok",
      picture,
      message: "Picture deleted."
    });
  } catch (error) {
    if(error.received === 0) {
      res.status(404).json({status: 404, error: `Picture ID: ${req.params.id} doesn't exist`})
    }
    next(error);
  }
};

module.exports = { getAllPics, addPic, deletePic };
