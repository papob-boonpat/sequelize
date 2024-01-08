const express = require("express");
const userController = require("../controllers/users");

const userRouter = express.Router();

userRouter.post("", userController.createUser);
userRouter.get("", userController.getUsers);
userRouter.get("/:uuid", userController.getUser);

module.exports = userRouter;
