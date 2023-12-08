const Sop = require("../models/Sop");

module.exports = {
    getSops: async (req, res) => {
      try {
        const sops = await Sop.find();
        res.render("sop.ejs", { sops: sops, user: req.user });
      } catch (err) {
        console.log(err);
      }
    },
    createSop: async (req, res) => {
      try {
        await Sop.create({
          title: req.body.title,
          objective: req.body.objective,
          prerequisites: req.body.prerequisites,
          procedure: req.body.procedure,
          conclusion: req.body.conclusion,
        });
        console.log("Sop has been added!");
        res.redirect("/sops");
      } catch (err) {
        console.log(err);
      }
    },
    deleteSop: async (req, res) => {
      try {
        // Delete post from db
        await Sop.remove({ _id: req.params.id });
        console.log("Deleted Sop");
        res.redirect("/sops");
      } catch (err) {
        res.redirect("/sops");
      }
    },
  };