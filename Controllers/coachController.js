const mysql = require("mysql");
const pool = require("../mysql/connection");

const getCoaches = (_req, res) => {
  pool.query("SELECT * FROM headcoaches", (err, rows) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(rows);
  });
};

const show = (req, res) => {
  let sql = `SELECT * FROM headcoaches WHERE id = ?`;
  sql = mysql.format(sql, req.params.id)
  pool.query(sql, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(row);
  });
};

const create = (req, res) => {
  const { first_name, last_name, email } = req.body;
  console.log(req);
  let sql = `INSERT INTO headcoaches (first_name, last_name, email) 
  VALUES (?, ?, ?)`;
  sql = mysql.format(sql, [first_name, last_name, email]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(row);
  });
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
  show,
  create,
  update,
  remove,
};
