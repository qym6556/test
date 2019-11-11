"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodashEs = require("lodash-es");

// import path from 'path'
let config = {
  env: process.env.NODE_ENV
};

if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 8081
  };
  config = (0, _lodashEs.extend)(config, localConfig);
}

if (process.env.NODE_ENV == 'production') {
  const proConfig = {
    port: 80
  };
  config = (0, _lodashEs.extend)(config, proConfig);
}

exports.default = config;