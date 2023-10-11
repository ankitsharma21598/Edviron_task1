const mongoose = require("mongoose");

// mongodb connection string
mongoose.connect('mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;
// verify that the connection is established or not.
db.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  
  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

// Export the db.
module.exports = db;
