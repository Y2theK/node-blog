const express = require("express");
const router = express.Router();
const {
  getBlogs,
  createBlog,
  getOneBlog,
  createNewBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.get("/:id", getOneBlog);
router.delete("/:id", deleteBlog);
// router.get("/create", createNewBlog);
router.post("/", createBlog);
module.exports = router;
