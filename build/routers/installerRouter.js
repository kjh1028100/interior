"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _installerController = require("../controllers/installerController");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var installerRouter = _express["default"].Router();
installerRouter.get("/search", _installerController.installersearch);
installerRouter.get("/", _middleware.protectedMiddleware, _installerController.getInterior);
installerRouter.route("/create").all(_middleware.protectedMiddleware).get(_installerController.getInteriorCreate);
installerRouter.route("/:id([a-z\\d+]{24})/edit").all(_middleware.protectedMiddleware).get(_installerController.getInteriorCreate);
installerRouter.get("/:id([a-z\\d+]{24})", _installerController.getSeeInstaller);
installerRouter.get("/delete-installer", _middleware.protectedMiddleware, _installerController.deleteInstaller);
var _default = installerRouter;
exports["default"] = _default;