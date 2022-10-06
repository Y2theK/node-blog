const express = require("express");
const router = express.Router();
const {
  getBlogs,
  createBlog,
  getOneBlog,
  createNewBlog,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.get("/:id", getOneBlog);
// router.get("/create", createNewBlog);
router.post("/", createBlog);
module.exports = router;
