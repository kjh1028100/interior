"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userControllers = require("../controllers/userControllers");
var _noticeController = require("../controllers/noticeController");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rootRouter = _express["default"].Router();
rootRouter.get("/", _userControllers.home);
rootRouter.get("/notice", _noticeController.notice);
rootRouter.route("/join").all(_middleware.publicMiddleware).get(_userControllers.getJoin).post(_userControllers.postJoin);
rootRouter.route("/login").all(_middleware.publicMiddleware).get(_userControllers.getLogin).post(_userControllers.postLogin);
rootRouter.get("/logout", _userControllers.logout);
var _default = rootRouter;
exports["default"] = _default;