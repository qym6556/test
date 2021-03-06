"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require("lodash");

var _path = require("path");

// import path from 'path'
let config = {
  env: process.env.NODE_ENV,
  staticDir: (0, _path.join)(__dirname, "..", "assets"),
  viewDir: (0, _path.join)(__dirname, "..", "views")
};

if (false) {
  console.log(123);
}

if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 8081
  };
  config = (0, _lodash.extend)(config, localConfig);
}

if (process.env.NODE_ENV == 'production') {
  const proConfig = {
    port: 3000
  };
  config = (0, _lodash.extend)(config, proConfig);
}

exports.default = config;