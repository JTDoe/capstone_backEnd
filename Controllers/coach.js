const mysql = require("mysql");
const pool = require("../mysql/connection.js");
const { handleSQLError } = require("../mysql/error.js");

const getCoaches = (req, res) => {
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getCoachesFirstName = (req, res) => {
  sql = mysql.format(sql, []);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getCoachesLastName = (req, res) => {
  sql = mysql.format(sql, []);

  sql = mysql.format(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getCoaches,
  getCoachesFirstName,
  getCoachesLastName,
};
