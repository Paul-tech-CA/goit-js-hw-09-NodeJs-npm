// const express = require("express");

const validator = require("validator"); /* абсолютный импорт (знает что пакет лежит в папке node_modules) */
const throttle = require("lodash.throttle");

const greeter = require("./greeter"); /* относительный импорт */

greeter("hello friends!!");

const validateEmail = (email) => {
  return validator.isEmail(email);
};

console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);

console.log(
  "Is Mangozedog.com a valid email?: ",
  validateEmail("Mangozedog.com")
);

// /* поднятие сервера для backend  */

// const app = express(); /* создали веб-сервер */
// app.get("/", (req, res) => {
//   /* указываем какие пути будут у сервера */
//   res.send({
//     message: "Node.js is AMAZING !!!",
//   }); /* что надо выполнить на каждом пути */
// });

// app.listen(5000, () => {
//   console.log(
//     "App is running on port 5000"
//   ); /* запуск сервера => node index.js */
// });
class User {
  static hello = "Hey Eddy!!!";
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

const mango = new User("Mango");
console.log(mango.name);
