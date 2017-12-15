var express = require('express')
var app = express();
var path = require("path");
const PORT = process.env.PORT || 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send("Aman ruler!");
});

app.listen(PORT);
