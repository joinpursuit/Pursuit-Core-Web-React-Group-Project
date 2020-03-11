const db = require("../../database/index");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 }
}).single("myImage");

const getAllPics = async (req, res, next) => {
  try {
    let pictures = await db.any(`SELECT * FROM pictures`);
    if (pictures.length) {
      res.status(200).json({
        status: "ok",
        pictures,
        message: "Retrieved all pictures"
      });
    } else {
      throw { status: 404, error: "No pictures found" };
    }
  } catch (error) {
    next(error);
  }
};

const addPic = (req, res, next) => {
  try {
    console.log("before upload");
    upload(req, res, err => {
      let picture = "/uploads/" + req.file.filename;
      let id = req.body.post_id;
      console.log(req.body, req.file.filename);
      let pictures = db
        .one(
          `INSERT INTO pictures (post_id,picture) VALUES($1,$2) RETURNING *`,
          [id, picture]
        )
        .then(done => {
          res.status(200).json({
            status: "ok",
            pictures,
            message: "Created new picture"
          });
        });
    });
    console.log("after upload", picture, id);
  } catch (error) {
    next(error);
  }
};

const deletePic = async (req, res, next) => {
  try {
    const { id } = req.params;
    let picture = await db.one(
      `DELETE FROM pictures WHERE id = $1 RETURNING *`,
      id
    );
    res.status(200).json({
      status: "ok",
      picture,
      message: "Deleted picture"
    });
  } catch (error) {
    if (error.received === 0) {
      res.status(404).json({
        status: 404,
        error: `Picture ID: ${req.params.id} doesn't exist`
      });
    } else {
      next(error);
    }
  }
};

module.exports = { getAllPics, addPic, deletePic };
