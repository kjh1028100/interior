"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _installerController = require("../controllers/installerController");
var _noticeController = require("../controllers/noticeController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var apiRouter = _express["default"].Router();
apiRouter.post("/installer/:id([a-z\\d+]{24})/save", _installerController.postCreateInterior);
apiRouter.patch("/installer/:id([a-z\\d+]{24})/view", _installerController.patchRegisterView);
apiRouter.patch("/installer/:id([a-z\\d+]{24})/like", _installerController.pathRegisterLike);
apiRouter.patch("/installer/:id([a-z\\d+]{24})/comment", _installerController.pathEditComment);
apiRouter.post("/installer/:id([a-z\\d+]{24})/comment", _installerController.postMakeComment);
apiRouter["delete"]("/installer/:id([a-z\\d+]{24})/comment", _installerController.deleteComment);
apiRouter.post("/notice/count", _noticeController.postNoticeTotal);
apiRouter.post("/notice/page", _noticeController.postPageNotice);
apiRouter.post("/installer/rank/filter", _installerController.postFilterRank);
var _default = apiRouter;
exports["default"] = _default;