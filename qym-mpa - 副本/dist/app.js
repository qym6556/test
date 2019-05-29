"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _routerInit = require("./routes/routerInit");

var _routerInit2 = _interopRequireDefault(_routerInit);

var _errorHandler = require("./middwares/errorHandler.js");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_log4js2.default.configure({
  appenders: {
    pp: {
      type: 'file',
      filename: __dirname + '/logs/qym.log'
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
});

const logger = _log4js2.default.getLogger("cheese");

const app = new _koa2.default();

_errorHandler2.default.error(app, logger);

_routerInit2.default.init(app, _koaSimpleRouter2.default);

app.listen(_config2.default.port, () => {
  console.log("server listening on" + _config2.default.port);
});