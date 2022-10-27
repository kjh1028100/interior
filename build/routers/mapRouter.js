"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _mapController = require("../controllers/mapController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mapRouter = _express["default"].Router();
mapRouter.route("/map").get(_mapController.kmap);
var _default = mapRouter;
exports["default"] = _default;