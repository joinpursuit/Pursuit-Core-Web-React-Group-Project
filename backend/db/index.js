const pgp = require("pg-promise")({});
const db = pgp("postgress://localhost:5432/bpersonal_db");

module.exports = db;
