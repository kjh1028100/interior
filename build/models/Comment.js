"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// installer,comment 둘중에 하나 구분 필요

var commentSchema = new _mongoose["default"].Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  createAt: {
    type: Date,
    "default": Date.now
  },
  owner: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  installer: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Installer"
  },
  notice: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Notice"
  },
  meta: {
    like: {
      type: Number,
      "default": 0
    }
  }
});
var Comment = _mongoose["default"].model("Comment", commentSchema);
var _default = Comment;
exports["default"] = _default;