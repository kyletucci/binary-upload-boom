const Ticket = require("../models/Ticket");

module.exports = {
  getTickets: async (req, res) => {
    try {
      const tickets = await Ticket.find().lean();
      res.render("tickets.ejs", { tickets: tickets, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createTicket: async (req, res) => {
    try {
      await Ticket.create({
        submittedBy: req.user,
        subject: req.body.subject,
        description: req.body.description,
        severity: req.body.severity,
      });
      console.log("Ticket has been added!");
      res.redirect("/tickets");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTicket: async (req, res) => {
    try {
      // Delete post from db
      await Ticket.remove({ _id: req.params.id });
      console.log("Deleted Asset");
      res.redirect("/tickets");
    } catch (err) {
      res.redirect("/tickets");
    }
  },
};
