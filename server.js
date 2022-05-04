var HTTP_PORT = process.env.PORT || 6060;
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.listen(HTTP_PORT, function () {
  console.log("App listening on: " + HTTP_PORT);
});
