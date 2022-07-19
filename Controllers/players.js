const mysql = require("mysql");
const pool = require("../mysql/connection.js");
const { handleSQLError } = require("../mysql/error.js");

const getPlayerFirstName = (req, res) => {
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getPlayerLastName = (req, res) => {
  sql = mysql.format(sql, []);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getPlayerPosition = (req, res) => {
  sql = mysql.format(sql, []);

  sql = mysql.format(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getPlayerFirstName,
  getPlayerLastName,
  getPlayerPosition,
};
