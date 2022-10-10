const mysql = require("mysql");
const pool = require("../mysql/connection");

const getPlayers = (req, res) => {
  pool.query("SELECT * FROM players", (err, rows) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(rows);
  });
};

const create = (req, res) => {
  const { first_name, last_name } = req.body;

  pool.query(
    `INSERT INTO players (first_name, last_name) 
      VALUES ("${first_name}","${last_name}")`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

const update = (req, res) => {
  let sql = "UPDATE ?? SET ? WHERE ?? = ?";
  sql = mysql.format(sql, ["players", req.body, "id", req.params.id]);
  pool.query(sql, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(row);
  });
};

const remove = (req, res) => {
  pool.query(`DELETE FROM players WHERE id = ${req.params.id}`, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(row);
  });
};

module.exports = {
  getPlayers,
  create,
  update,
  remove,
};
