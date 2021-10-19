var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// Routes
app.post("/api/auth", function (req, res) {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  // console.log(req);
  res.status(200).send("Message sent to mqtt");
});

app.get("/api/:tt", function (req, res) {
  console.log(req.params);
  res.status(200).send("Message sent to mqtt");
});

var server = app.listen(3333, function () {
  console.log("app running on port.", server.address().port);
});