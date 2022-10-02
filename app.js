const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.set('views',"myViews")  myViews custom folder name //default folder name - views
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
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
app.listen(4000, () => {
  console.log("listening at port 4000");
});
