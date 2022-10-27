"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePaint = exports.squarePaint = exports.imgPaint = exports.StraightPaint = exports.FloorPaint = exports.CirclePaint = void 0;
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var updatePaint = /*#__PURE__*/_createClass(function updatePaint(_id, sx, sy, ex, ey, color) {
  _classCallCheck(this, updatePaint);
  this.id = _id;
  this.sx = sx;
  this.sy = sy;
  this.ex = ex;
  this.ey = ey;
  this.color = color;
});
exports.updatePaint = updatePaint;
var squarePaint = /*#__PURE__*/function (_updatePaint) {
  _inherits(squarePaint, _updatePaint);
  var _super = _createSuper(squarePaint);
  function squarePaint(_id, sx, sy, ex, ey, color, border, name) {
    var _this;
    _classCallCheck(this, squarePaint);
    _this = _super.call(this, _id, sx, sy, ex, ey, color);
    _this.border = border;
    _this.name = name;
    return _this;
  }
  return _createClass(squarePaint);
}(updatePaint);
exports.squarePaint = squarePaint;
var imgPaint = /*#__PURE__*/function (_updatePaint2) {
  _inherits(imgPaint, _updatePaint2);
  var _super2 = _createSuper(imgPaint);
  function imgPaint(_id, sx, sy, ex, ey, name) {
    var _this2;
    _classCallCheck(this, imgPaint);
    _this2 = _super2.call(this, _id, sx, sy, ex, ey, color);
    _this2.name = name;
    _this2.list = list;
    return _this2;
  }
  return _createClass(imgPaint);
}(updatePaint);
exports.imgPaint = imgPaint;
var CirclePaint = /*#__PURE__*/function (_updatePaint3) {
  _inherits(CirclePaint, _updatePaint3);
  var _super3 = _createSuper(CirclePaint);
  function CirclePaint(_id, sx, sy, ex, ey, color, border, name) {
    var _this3;
    _classCallCheck(this, CirclePaint);
    _this3 = _super3.call(this, _id, sx, sy, ex, ey, color);
    _this3.border = border;
    _this3.name = name;
    return _this3;
  }
  return _createClass(CirclePaint);
}(updatePaint);
exports.CirclePaint = CirclePaint;
var StraightPaint = /*#__PURE__*/function (_updatePaint4) {
  _inherits(StraightPaint, _updatePaint4);
  var _super4 = _createSuper(StraightPaint);
  function StraightPaint(_id, sx, sy, ex, ey, color, border, name) {
    var _this4;
    _classCallCheck(this, StraightPaint);
    _this4 = _super4.call(this, _id, sx, sy, ex, ey, color);
    _this4.border = border;
    _this4.name = name;
    return _this4;
  }
  return _createClass(StraightPaint);
}(updatePaint);
exports.StraightPaint = StraightPaint;
var FloorPaint = /*#__PURE__*/function (_updatePaint5) {
  _inherits(FloorPaint, _updatePaint5);
  var _super5 = _createSuper(FloorPaint);
  function FloorPaint(_id, sx, sy, ex, ey, color, border, name) {
    var _this5;
    _classCallCheck(this, FloorPaint);
    _this5 = _super5.call(this, _id, sx, sy, ex, ey, color);
    _this5.border = border;
    _this5.name = name;
    return _this5;
  }
  return _createClass(FloorPaint);
}(updatePaint);
exports.FloorPaint = FloorPaint;