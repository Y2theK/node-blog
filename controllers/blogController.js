const { default: mongoose } = require("mongoose");
const Blog = require("../models/blogModel");

const getBlogs = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
      // res.send(result);
    })
    .catch((err) => console.log(err));
};
//get one blog
const getOneBlog = (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.render("404");
  }
  Blog.findById(id)
    .then((result) => {
      res.render("detail", { title: "Blog Detail", blog: result });
    })
    .catch((err) => {
      res.render("404");
    });
};
const createNewBlog = (req, res) => {
  res.render("create", { title: "Create New Blog" });
};
const createBlog = (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};
const deleteBlog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  getBlogs,
  createBlog,
  getOneBlog,
  createNewBlog,
  deleteBlog,
};
