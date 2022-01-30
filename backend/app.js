const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { celebrate, Joi, errors } = require("celebrate");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  login,
  createUser,
} = require("./controllers/users");
const auth = require("./middlewares/auth");
const NotFoundError = require("./errors/not-found-err");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect("mongodb://localhost:27017/mydb");
app.use("*", cors({
  origin: [
    "http://localhost:3001",
    "http://localhost:3000",
    "https://flamer.nomoredomains.work",
    "http://flamer.nomoredomains.work",
  ],
  methods: ["OPTIONS", "GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "origin", "Authorization", "Cookie"],
  exposedHeaders: ["Set-Cookie"],
  credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Сервер сейчас упадёт");
  }, 0);
});

app.post("/signin", celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);
app.post("/signup", celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/^(https?:\/\/)?[\w-]{1,}\.\w{1,10}[^\s@]*/).min(7),
    about: Joi.string().min(2).max(30),
  }),
}), createUser);

app.get("/logout", (req, res, next) => {
  res
    .clearCookie("jwt", {
      /*     secure: true, */
      sameSite: "none",
      /*           domain: "flamer.nomoredomains.work", */
    })
    .send({ message: "Выход совершен успешно" });
  next();
});

app.use(auth);

app.use("/", require("./routes/users"));
app.use("/", require("./routes/cards"));

app.use(errorLogger);

app.use("/", (req, res, next) => {
  next(new NotFoundError("Маршрут не найден"));
});
app.use(errors());
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = statusCode === 500 ? "На сервере произошла ошибка" : err.message;
  res.status(statusCode).send({ message });
  next();
});

app.listen(PORT, () => {

});
