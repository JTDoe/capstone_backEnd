const express = require("express");
const coachController = require("../controllers/coachController");
const router = express.Router();

router.get("/", coachController.getCoaches);

router.get("/:first_name", coachController.getCoachesFirstName);

router.get("/:last_name", coachController.getCoachesLastName);

module.exports = router;
