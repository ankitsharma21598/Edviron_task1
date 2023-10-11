const express = require("express");
const router = express.Router();
// Import dues controller from controllers folder
const duesController = require("../../controllers/duesController");
// Basic Router
router.get("/", (req, res) => {res.send("inside api")});
// Defaultere student route
router.get("/defaulters", duesController.defaulters );

module.exports = router;