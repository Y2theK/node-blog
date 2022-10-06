const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoutes = require("./routes/blogRoutes");

const blogs = [
  { title: "How to be a better developer", snippet: "Eat , Sleep , Code" },
  { title: "How to be a better developer", snippet: "Eat , Sleep , Code" },
  { title: "How to be a better developer", snippet: "Eat , Sleep , Code" },
];

//middleware
app.use((req, res, next) => {
  console.log(req.hostname, req.path, req.method);
  //   //next m pr yin set m twr
  next();
});

app.set("view engine", "ejs");
// app.set('views',"myViews")  myViews custom folder name //default folder name - views
//static middleware
app.use(express.static("public"));
//morgan middleware
// dev is how you want to format you log history
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create New Blog" });
});
app.use(express.urlencoded({ extended: true }));
//blog routes
app.use("/blogs", blogRoutes);
//rediect
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

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
