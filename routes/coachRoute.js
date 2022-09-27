const express = require("express");
const router = express.Router();
const {
  getCoaches,
  create,
  update,
  remove,
} = require("../Controllers/coachController");

router.get("/", getCoaches);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
