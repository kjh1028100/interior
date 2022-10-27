"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect(process.env.DB_URL);
var db = _mongoose["default"].connection;
var handleDbError = function handleDbError(error) {
  console.log("\u274C DB Error ".concat(error));
};
var handleDbOpen = function handleDbOpen() {
  console.log("\u2705 DB Connection");
};
db.on("error", handleDbError);
db.once("open", handleDbOpen);