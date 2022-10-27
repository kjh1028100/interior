"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userControllers = require("../controllers/userControllers");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userRouter = _express["default"].Router();

// social login
userRouter.get("/github/start", _middleware.publicMiddleware, _userControllers.GithubStartLogin);
userRouter.get("/github/finish", _userControllers.GithubFinishLogin);
userRouter.get("/kakao/start", _middleware.publicMiddleware, _userControllers.KakaoStartLogin);
userRouter.get("/kakao/finish", _userControllers.KakaoFinishLogin);
// see profile
userRouter.get("/:id([a-z\\d+]{24})", _userControllers.see);
// edit page
userRouter.route("/edit").all(_middleware.protectedMiddleware).get(_userControllers.getEdit).post(_middleware.avatarUpload.single("avatar"), _userControllers.postEdit);
userRouter.route("/change-password").all(_middleware.protectedMiddleware).get(_userControllers.getChangePassword).post(_userControllers.postChangePassword);
var _default = userRouter;
exports["default"] = _default;