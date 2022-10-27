"use strict";

require("dotenv/config");
require("./db");
require("./models/User");
require("./models/Notice");
require("./models/Installer");
require("./models/Paint");
require("./models/Comment");
require("./models/Rank");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 5555;
var handleListen = function handleListen() {
  console.log("http://localhost:".concat(PORT, " \uD83D\uDE80"));
};
_server["default"].listen(PORT, handleListen);