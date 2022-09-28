const express = require("express");
const router = express.Router();
const {
  getPlayers,
  create,
  update,
  remove,
} = require("../controllers/playerController");

router.get("/", getPlayers);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;