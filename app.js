const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
app.set("view engine", "ejs");
// app.set('views',"myViews")  myViews custom folder name //default folder name - views

const blogs = [
  { title: "How to be a better developer", snippet: "Eat , Sleep , Code" },
  { title: "How to be a better developer", snippet: "Eat , Sleep , Code" },
  { title: "How to be a better developer", snippet: "Eat , Sleep , Code" },
];

//middleware
app.use((req, res, next) => {
  console.log(req.hostname, req.path, req.method);
  //next m pr yin set m twr
  next();
});

//morgan middleware
// dev is how you want to format you log history
app.use(morgan("dev"));

//static middleware
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
//rediect
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create New Blog" });
});
//404 middleware
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

mongoose.connect(process.env.DBURL).then((res) => {
  // console.log("res", res);
  app.listen(process.env.PORT, () => {
    console.log("connect to db and listening at port ", process.env.PORT);
  });
});
