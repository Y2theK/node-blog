const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoutes = require("./routes/blogRoutes");

app.set("view engine", "ejs");
// app.set('views',"myViews")  myViews custom folder name //default folder name - views
//static middleware
app.use(express.static("public"));
//morgan middleware
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use(express.urlencoded({ extended: true }));
//blog routes
app.use("/blogs", blogRoutes);

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
