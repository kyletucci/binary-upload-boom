const express = require("express");
const router = express.Router();
const sopsController = require("../controllers/sops")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, sopsController.getSops);

router.get("/:id", ensureAuth, sopsController.displaySop);

router.post("/createSop/:id", ensureAuth, sopsController.createSop);

router.delete("/deleteSop/:id", sopsController.deleteSop);

module.exports = router;
