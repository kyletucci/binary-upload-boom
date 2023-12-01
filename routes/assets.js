const express = require("express");
const router = express.Router();
const assetsController = require("../controllers/assets");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.post("/createAsset/:id", ensureAuth, assetsController.createAsset);

router.delete("/deleteAsset/:id", assetsController.deleteAsset);

module.exports = router;
