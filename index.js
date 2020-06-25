var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connecting back to front and styles
app.set("view engine", "ejs");
app.use(express.static("public"));

//route home
app.get("/", function (req, res) {
  res.render("index.ejs");
});

//route portfolio
app.get("/portfolio", function (req, res) {
  res.render("index.ejs");
});

//route contact
app.get("/contact", function (req, res) {
  res.render("index.ejs");
});
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
