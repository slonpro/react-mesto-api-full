const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const NotFoundError = require("../errors/not-found-err");
const BadRequest = require("../errors/bad-request");
const ConflictError = require("../errors/conflict-error");
require("dotenv").config();

const { NODE_ENV, JWT_SECRET } = process.env;

const checkUser = (user, res) => {
  if (!user) {
    throw new NotFoundError("Нет пользователя с таким id");
  }
  res.send(user);
};

module.exports.createUser = (req, res, next) => {
  const {
    name, about, avatar, password, email,
  } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new ConflictError("Пользователь с данным email существует");
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then(() => res.status(201).send({
      data: {
        name, about, avatar, email,
      },
    }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(new BadRequest(`${Object.values(err.errors).map((error) => error.message).join(", ")}`));
      } else {
        next(err);
      }
    });
};

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => checkUser(user, res))
    .catch((err) => {
      if (err.name === "CastError") {
        throw new BadRequest("Некоретные данные");
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => checkUser(user, res))
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => checkUser(user, res))
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => checkUser(user, res))
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      console.log(process.env.NODE_ENV)
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === "production" ? JWT_SECRET : "dev-secret",
        { expiresIn: "24h" },
      );
      res
        .cookie("jwt", token, {
          maxAge: 3600000 * 12 * 7,
          httpOnly: true,
        });
      res.send({ token });
    })
    .catch(next); // Сообщение ошибки передается в модели пользователя
};
