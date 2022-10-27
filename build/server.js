"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
var _morgan = _interopRequireDefault(require("morgan"));
var _middleware = require("./middleware");
var _rootRouter = _interopRequireDefault(require("./routers/rootRouter"));
var _userRouter = _interopRequireDefault(require("./routers/userRouter"));
var _installerRouter = _interopRequireDefault(require("./routers/installerRouter"));
var _noticeRouter = _interopRequireDefault(require("./routers/noticeRouter"));
var _apiRouter = _interopRequireDefault(require("./routers/apiRouter"));
var _rankRouter = _interopRequireDefault(require("./routers/rankRouter"));
var _mapRouter = _interopRequireDefault(require("./routers/mapRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var logger = (0, _morgan["default"])("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(logger);
app.use((0, _expressSession["default"])({
  secret: process.env.SESSION_TXT,
  resave: false,
  saveUninitialized: false,
  store: _connectMongo["default"].create({
    mongoUrl: process.env.DB_URL
  })
}));
app.use("/uploads", _express["default"]["static"]("uploads"));
app.use("/static", _express["default"]["static"]("asset"));
app.use(_middleware.localsMiddlware);
app.use("/", _rootRouter["default"]);
app.use("/user", _userRouter["default"]);
app.use("/notice", _noticeRouter["default"]);
app.use("/installer", _installerRouter["default"]);
app.use("/api", _apiRouter["default"]);
app.use("/rank", _rankRouter["default"]);
app.use("/map", _mapRouter["default"]);
var _default = app;
exports["default"] = _default;