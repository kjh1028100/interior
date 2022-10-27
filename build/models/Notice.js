"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var noticeSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    trim: true,
    maxlength: 20
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
  image: {
    type: String
  },
  meta: {
    rating: {
      type: Number,
      "default": 0
    },
    views: {
      type: Number,
      "default": 0
    }
  },
  //신고 스키마
  report: {
    rtile: {
      type: String,
      trim: true
    },
    rcontent: {
      type: String,
      trim: true
    },
    rcount: {
      type: Number,
      "default": 0
    }
  },
  //댓글 스키마
  comment: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }]
});
var Notice = _mongoose["default"].model("Notice", noticeSchema);
var _default = Notice;
exports["default"] = _default;