const express = require("express");
var app = express();
require('dotenv').config()

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
