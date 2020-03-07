const pgp = require("pg-promise")({});
const db = pgp("postgress://localhost:5432/our_canvas_db");

module.exports = db;
