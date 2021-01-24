const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// imports
const routes = require("./routes/index");

app.set("view engine", "ejs");

// middlewares
const middlewares = [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
];
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));
app.use(middlewares);

app.use("/", routes);

app.locals.runLoading = () => {
  return console.log("hello");
};

app.listen(port, () => {
  console.log("app is running");
});
