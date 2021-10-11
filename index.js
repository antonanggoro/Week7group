const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

const flash = require("express-flash");

app.use(express.urlencoded({ extended: false }));

const passport = require("./lib/passport");
app.use(passport.initialize());

const ejs = require("ejs");
app.set("view engine", "ejs");

const router = require("./router");
app.use(router);
app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.listen(port, () => {
  console.log("server menyala");
});
