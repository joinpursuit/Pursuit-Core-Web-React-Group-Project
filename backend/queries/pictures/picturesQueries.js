const db = require("../../database/index");

const getAllPics = async (req, res, next) => {
  try {
    let pictures = await db.any(`SELECT * FROM pictures`);
    if(pictures.length) {
      res.status(200).json({
        status: "ok",
        pictures,
        message: "Retrieved all pictures"
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
    const { post_id, picture } = req.body;
    let pictures = await db.one(`INSERT INTO pictures (post_id,picture) VALUES($1,$2) RETURNING *`, [post_id, picture]);
    res.status(200).json({
      status: "ok",
      pictures,
      message: "Created new picture"
    });
  } catch (error) {
    next(error);
  }
};

const deletePic = async (req, res, next) => {
  try {
    const { id } = req.params;
    let picture = await db.one(`DELETE FROM pictures WHERE id = $1 RETURNING *`, id);
    res.status(200).json({
      status: "ok",
      picture,
      message: "Deleted picture"
    });
  } catch (error) {
    if(error.received === 0) {
      res.status(404).json({status: 404, error: `Picture ID: ${req.params.id} doesn't exist`})
    } else {
      next(error);
    }
  }
};

module.exports = { getAllPics, addPic, deletePic };
