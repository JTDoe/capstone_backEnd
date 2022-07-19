const express = require("express");
const teamsController = require("../controllers/teams");
const router = express.Router();

router.get("/:id", teamsController.getTeamID);

router.get("/:zip", teamsController.getTeamName);

module.exports = router;
