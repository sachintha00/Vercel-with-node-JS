const express = require("express");
var app = express();
require("dotenv").config();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/test", function (req, res) {
  res.send("test");
});

const port = process.env.PORT || 9001;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
