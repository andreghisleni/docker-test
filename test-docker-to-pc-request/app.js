const { default: axios } = require("axios");
var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// Routes
app.get("/api/:test", function (req, res) {
  console.log(req.params.test);

  axios.post("http://localhost:3333/api/auth", {
    username: req.params.test,
    password: `testgnfyfgh - ${req.params.test}`,
  }).then(response => console.log(response.data)).catch(console.error);

  res.status(200).send("Message sent to mqtt");
});

var server = app.listen(3000, function () {
  console.log("app running on port:.", server.address().port);
});