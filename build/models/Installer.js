"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var installerSchema = new _mongoose["default"].Schema({
  paint: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Paint"
  }],
  //그림
  resulturl: {
    type: String,
    trim: true,
    required: true
  },
  //완성 url
  title: {
    type: String,
    required: true
  },
  // 인테리어 이름
  meta: {
    view: {
      type: Number,
      "default": 0
    },
    like: {
      type: Number,
      "default": 0
    }
  },
  owner: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  },
  // 누가 작성했는지
  createAt: {
    type: Date,
    "default": Date.now
  },
  comment: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Comment"
  }],
  rank: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Rank"
  }
});
var Installer = _mongoose["default"].model("Installer", installerSchema);
var _default = Installer;
exports["default"] = _default;