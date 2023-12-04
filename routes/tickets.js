const express = require("express");
const router = express.Router();
const ticketsController = require("../controllers/tickets");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, ticketsController.getTickets);

router.post("/createTicket/", ensureAuth, ticketsController.createTicket);

router.delete("/deleteTicket/:id", ticketsController.deleteTicket);

module.exports = router;
