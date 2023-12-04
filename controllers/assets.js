const Asset = require("../models/Asset");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const assets = await Asset.find({ user: req.user.id });
      res.render("profile.ejs", { assets: assets, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createAsset: async (req, res) => {
    try {
      await Asset.create({
        primaryUser: req.body.primaryUser,
        department: req.body.department,
        model: req.body.model,
        serviceTag: req.body.serviceTag,
        deployDate: req.body.deployDate,
        expirationDate: req.body.expirationDate,
        user: req.params.id
      });
      console.log(req.body)
      console.log("Asset has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  deleteAsset: async (req, res) => {
    try {
      // Delete post from db
      await Asset.remove({ _id: req.params.id });
      console.log("Deleted Asset");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
