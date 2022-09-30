const express = require("express");
const router = express.Router();
const {
  getCoaches,
  show,
  create,
  update,
  remove,
} = require("../controllers/coachController");

router.get("/", getCoaches);
router.get("/:id", show);
router.post("/headCoaches", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
