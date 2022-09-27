const express = require("express");
const router = express.Router();
const {
  list,
  show,
  create,
  update,
  remove,
} = require("../Controllers/teamController");

router.get("/", list);
router.get("/:team_name", show);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
