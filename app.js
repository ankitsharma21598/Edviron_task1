const express = require("express");
const app = express();
const serverless = require("serverless-http");
// Require dotenv configuration
require('dotenv').config();
const mongoose = require("./config/mongoose.js");

// process.env.PORT || default port
const PORT = process.env.PORT || 3001;

// Main route
app.use("/", require("./routes/index.js"));

// Export severless handlers
module.exports.handler = serverless(app);