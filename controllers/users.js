const { User } = require("../models");

exports.createUser = (req, res, next) => {
  const { name, email, role } = req.body;

  User.create({ name, email, role })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

exports.getUsers = (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

exports.getUser = (req, res) => {
  const uuid = req.params.uuid;
  console.log(uuid);
  User.findOne({
    where: { uuid },
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
