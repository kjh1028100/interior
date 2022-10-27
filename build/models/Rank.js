"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rankSchema = new _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  },
  owner: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Installer"
  },
  imgUrl: {
    type: String,
    trim: true,
    require: true
  },
  description: {
    type: String,
    trim: true
  },
  createAt: {
    type: Date,
    "default": Date.now,
    trim: true
  },
  score: {
    type: Number,
    "default": 0
  }
});
var Rank = _mongoose["default"].model("Rank", rankSchema);
var _default = Rank;
exports["default"] = _default;