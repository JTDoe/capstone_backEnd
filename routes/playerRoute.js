const express = require("express");
const router = express.Router();
const {
  getPlayers,
  getPlayersFirstName,
  getPlayersLastName,
  create,
  update,
  remove,
} = require("../controllers/playerController");

router.get("/", getPlayers);
router.get("/:first_name", getPlayersFirstName);
router.get("/:id/last_name", getPlayersLastName);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;