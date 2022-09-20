// const mysql = require("mysql");
// const { headCoaches } = require("./data/data.js");
const pool = require("../mysql/connection.js");
const { handleSQLError } = require("../mysql/error.js");

const getCoaches = (req, res) => {
  pool.query("SELECT * FROM headcoaches", (err, rows) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(rows);
  });
};

const getCoachesFirstName = (req, res) => {
  pool.query(
    `SELECT * FROM headcoaches WHERE first_name = ${req.params.first_name}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

const getCoachesLastName = (req, res) => {
  pool.query(
    `SELECT * FROM headcoaches WHERE last_name = ${req.params.last_name}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

const create = (req, res) => {
  const { first_name, last_name, email } = req.body;

  pool.query(
    `INSERT INTO headcoaches (first_name, last_name, email) 
      VALUES ("${first_name}","${last_name}", "${email}")`,
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
  sql = mysql.format(sql, ["headcoaches", req.body, "id", req.params.id]);
  pool.query(sql, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(row);
  });
};

const remove = (req, res) => {
  pool.query(
    `DELETE FROM headcoaches WHERE id = ${req.params.id}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

module.exports = {
  getCoaches,
  getCoachesFirstName,
  getCoachesLastName,
  create,
  update,
  remove,
};
