const express = require("express");
const postController = require("../controllers/posts");

const postRouter = express.Router();

postRouter.post("", postController.createPost);
postRouter.get("", postController.getPosts);

module.exports = postRouter;
