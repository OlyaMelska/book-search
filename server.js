const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/books-app";

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(MONGODB_URI || "error", { useNewUrlParser: true })
  .then(res => console.log("Success"))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎 Server now listening on PORT http://localhost:${PORT} !`);
  console.log("API ", process.env.GOOGLE_BOOKS_API_KEY);
  console.log("MONGODB-URI ", process.env.MONGODB_URI);
});
