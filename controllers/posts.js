const { User, Post } = require("../models");

exports.createPost = (req, res, next) => {
  const { userUuid, body } = req.body;
  User.findOne({ where: { uuid: userUuid } })
    .then((user) => {
      return user.createPost({ body, userId: user.id });
    })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => res.status(500).json(err));
};
exports.getPosts = (req, res, next) => {
  Post.findAll({ include: ["user"] })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => res.status(500).json(err));
};
