const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {});
app.listen(4000, () => {
  console.log("listening at port 4000");
});
