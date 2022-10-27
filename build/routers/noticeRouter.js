"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _middleware = require("../middleware");
var _noticeController = require("../controllers/noticeController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var noticeRouter = _express["default"].Router();
noticeRouter.get("/search", _noticeController.search);
noticeRouter.route("/upload").get(_noticeController.getUpload).post(_middleware.noticeUpload.single("avatar"), _noticeController.postUpload);
noticeRouter.get("/:id([a-z\\d+]{24})", _noticeController.see);
noticeRouter.route("/:id([a-z\\d+]{24})/edit").get(_noticeController.getEdit).post(_middleware.noticeUpload.single("avatar"), _noticeController.postEdit);
noticeRouter.get("/:id([a-z\\d+]{24})/delete", _noticeController.deleteNotice);
noticeRouter.route("/:id([a-z\\d+]{24})/report").get(_noticeController.getReport).post(_noticeController.postReport);
noticeRouter.route("/:id([a-z\\d+]{24})").get(_noticeController.getComment).post(_noticeController.postComment);
var _default = noticeRouter;
exports["default"] = _default;