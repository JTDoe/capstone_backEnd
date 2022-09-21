const express = require("express");
const router = express.Router();
const {
  getCoaches,
  getCoachesFirstName,
  getCoachesLastName,
  create,
  update,
  remove,
} = require("../controllers/coachController");

router.get("/", getCoaches);
router.get("/:first_name", getCoachesFirstName);
router.get("/:id/last_name", getCoachesLastName);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
