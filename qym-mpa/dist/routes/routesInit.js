"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexController = require("./indexController.js");

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routesInit = {
  init(app, router) {
    app.use(router(_ => {
      _.get('/', _indexController2.default.indexAction());

      _.post('/name/:id', (ctx, next) => {//
      });
    }));
  }

};
exports.default = routesInit;