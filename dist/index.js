"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const express = require("express");
var validator = require("validator");
/* абсолютный импорт (знает что пакет лежит в папке node_modules) */


var throttle = require("lodash.throttle");

var greeter = require("./greeter");
/* относительный импорт */


greeter("hello friends!!");

var validateEmail = function validateEmail(email) {
  return validator.isEmail(email);
};

console.log("Is mango@mail.com a valid email?: ", validateEmail("mango@mail.com"));
console.log("Is Mangozedog.com a valid email?: ", validateEmail("Mangozedog.com")); // /* поднятие сервера для backend  */
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

var User = /*#__PURE__*/function () {
  function User(name) {
    _classCallCheck(this, User);

    this._name = name;
  }

  _createClass(User, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return User;
}();

_defineProperty(User, "hello", "Hey Eddy!!!");

var mango = new User("Mango");
console.log(mango.name);