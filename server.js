var HTTP_PORT = process.env.PORT || 6060;
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/portfolio.html"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/contacts.html"));
});

app.listen(HTTP_PORT, function () {
  console.log("App listening on: " + HTTP_PORT);
});
