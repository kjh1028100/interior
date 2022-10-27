"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var paintSchema = new _mongoose["default"].Schema({
  name: {
    type: String
  },
  img: {
    type: String
  },
  sxPos: {
    type: Number,
    "default": 0
  },
  syPos: {
    type: Number,
    "default": 0
  },
  exPos: {
    type: Number,
    "default": 0
  },
  eyPos: {
    type: Number,
    "default": 0
  },
  color: {
    type: String
  },
  border: {
    type: String
  },
  owner: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: "Installer"
  }
});
var Paint = _mongoose["default"].model("Paint", paintSchema);
var _default = Paint;
exports["default"] = _default;