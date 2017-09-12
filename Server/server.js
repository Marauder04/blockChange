var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require('body-parser')


app.use(require('cors')());
app.use(bodyParser.json())

app.post("/notification", function(req, res) {
  console.log(req.body)
  res.send(req.body);
})

http.createServer(app).listen(3001, function() {
  console.log("Server started at post 3001");
});
