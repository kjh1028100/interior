"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicMiddleware = exports.protectedMiddleware = exports.noticeUpload = exports.localsMiddlware = exports.interiorUpload = exports.avatarUpload = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var localsMiddlware = function localsMiddlware(req, res, next) {
  res.locals.siteName = "Installer";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.user = req.session.user;
  next();
};
exports.localsMiddlware = localsMiddlware;
var protectedMiddleware = function protectedMiddleware(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    return res.redirect("/");
  }
};
exports.protectedMiddleware = protectedMiddleware;
var publicMiddleware = function publicMiddleware(req, res, next) {
  if (!req.session.loggedIn) {
    next();
  } else {
    return res.redirect("/");
  }
};
exports.publicMiddleware = publicMiddleware;
var avatarUpload = (0, _multer["default"])({
  dest: "uploads/avatar",
  limits: {
    fileSize: 30000000
  }
});
exports.avatarUpload = avatarUpload;
var noticeUpload = (0, _multer["default"])({
  dest: "uploads/notice"
});
exports.noticeUpload = noticeUpload;
var interiorUpload = (0, _multer["default"])({
  dest: "uploads/interior",
  limits: {
    fileSize: 100000000
  }
});
exports.interiorUpload = interiorUpload;