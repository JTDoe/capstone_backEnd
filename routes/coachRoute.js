const express = require("express");
const router = express.Router();
const {
  getCoaches,
  showTeamByCoach,
  getCoachesLastName,
  create,
  update,
  remove,
} = require("../controllers/coachController");

router.get("/", getCoaches);
router.get("/:id/team", showTeamByCoach);
router.get("/:id/last_name", getCoachesLastName);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
