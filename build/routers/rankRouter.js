"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _rankController = require("../controllers/rankController");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rankRouter = _express["default"].Router();
rankRouter.get("/", _rankController.getRank);

// 탐색
rankRouter.get("/:id([a-z\\d+]{24})", _rankController.getSee);
// 생성
rankRouter.all(_middleware.protectedMiddleware).route("/:id([a-z\\d+]{24})/create").get(_rankController.getCreate).post(_middleware.interiorUpload.single("interior"), _rankController.postCreate);

// 수정
rankRouter.all(_middleware.protectedMiddleware).route("/:id([a-z\\d+]{24})/edit").get(_rankController.getEdit).post(_middleware.interiorUpload.single("interior"), _rankController.postEdit);
// 삭제
rankRouter.get("/:id([a-z\\d+]{24})/delete", _rankController.delteRank);
var _default = rankRouter;
exports["default"] = _default;