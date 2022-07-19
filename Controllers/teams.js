const mysql = require("mysql");
const pool = require("../mysql/connection.js");
const { handleSQLError } = require("../mysql/error.js");

const getTeamName = (req, res) => {
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getTeamID = (req, res) => {
  sql = mysql.format(sql, []);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};



module.exports = {
  getTeamID,
  getTeamName,
};
