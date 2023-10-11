const express = require("express");
const router = express.Router();
// Basic route
router.get("/", (req, res) => {res.send("inside router")});
// Inside /api route
router.use("/api", require("./api"));

// Export routes
module.exports = router;