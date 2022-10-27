"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMakeComment = exports.postFilterRank = exports.postCreateInterior = exports.pathRegisterLike = exports.pathEditComment = exports.patchRegisterView = exports.installersearch = exports.getSeeInstaller = exports.getInteriorCreate = exports.getInterior = exports.deleteInstaller = exports.deleteComment = void 0;
var _Installer = _interopRequireDefault(require("../models/Installer"));
var _User = _interopRequireDefault(require("../models/User"));
var _Comment = _interopRequireDefault(require("../models/Comment"));
var _PaintClass = require("../models/PaintClass");
var _Paint = _interopRequireDefault(require("../models/Paint"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var ErrorStatusCode = 404;
var ErrorStatusCode1 = 400;
var CorrectStatusCode = 201;

//search
var installersearch = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var title, installer;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            title = req.query.title;
            installer = [];
            if (!title) {
              _context.next = 6;
              break;
            }
            _context.next = 5;
            return _Installer["default"].find({
              title: {
                $regex: new RegExp("".concat(title), "i")
              }
            });
          case 5:
            installer = _context.sent;
          case 6:
            return _context.abrupt("return", res.render("installer/search", {
              pageTitle: "Search Title",
              installer: installer
            }));
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function installersearch(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.installersearch = installersearch;
var getInterior = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _id, exists;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _id = req.session.user._id;
            _context2.next = 3;
            return _User["default"].findById(_id);
          case 3:
            exists = _context2.sent;
            if (exists) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return", res.status(ErrorStatusCode1).redirect("/"));
          case 6:
            return _context2.abrupt("return", res.render("installer/choose", {
              pageTitle: "Choose option"
            }));
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getInterior(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getInterior = getInterior;
var getSeeInstaller = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, installer;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Installer["default"].findById(id).populate("owner").populate("comment");
          case 3:
            installer = _context3.sent;
            if (installer) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt("return", res.status(ErrorStatusCode).redirect("/"));
          case 6:
            return _context3.abrupt("return", res.status(CorrectStatusCode).render("installer/see", {
              pageTitle: "".concat(installer.title),
              installer: installer
            }));
          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getSeeInstaller(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getSeeInstaller = getSeeInstaller;
var getInteriorCreate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _id, id, user, findInstaller, exists, paints;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _id = req.session.user._id, id = req.params.id;
            _context4.next = 3;
            return _User["default"].findById(_id).populate("Installer");
          case 3:
            user = _context4.sent;
            if (user) {
              _context4.next = 6;
              break;
            }
            return _context4.abrupt("return", res.status(ErrorStatusCode1).redirect("/"));
          case 6:
            if (!id) {
              _context4.next = 18;
              break;
            }
            findInstaller = user.Installer.find(function (el) {
              return String(el._id) === String(id);
            }); // 중복확인
            // 새로생성하고 싶을떄는 새로 생성(에러)
            if (findInstaller) {
              _context4.next = 10;
              break;
            }
            return _context4.abrupt("return", res.render("installer/create", {
              pageTitle: "Error message"
            }));
          case 10:
            _context4.next = 12;
            return _Installer["default"].exists({
              _id: findInstaller._id
            });
          case 12:
            exists = _context4.sent;
            if (!exists) {
              _context4.next = 18;
              break;
            }
            _context4.next = 16;
            return _Installer["default"].findById({
              _id: findInstaller._id
            }).populate("paint");
          case 16:
            paints = _context4.sent;
            return _context4.abrupt("return", res.render("installer/create", {
              pageTitle: "".concat(findInstaller.title, " Interior"),
              findInstaller: findInstaller,
              paints: paints.paint
            }));
          case 18:
            return _context4.abrupt("return", res.render("installer/create", {
              pageTitle: "Create Interior"
            }));
          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function getInteriorCreate(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getInteriorCreate = getInteriorCreate;
var postCreateInterior = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var _id, _req$body, title, imageUrl, arFloor, arSquare, arStraight, arCircle, arImg, updatePaint, id, user, existsTitle, findInstaller, updateInstaller, installer;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _id = req.session.user._id, _req$body = req.body, title = _req$body.title, imageUrl = _req$body.imageUrl, arFloor = _req$body.arFloor, arSquare = _req$body.arSquare, arStraight = _req$body.arStraight, arCircle = _req$body.arCircle, arImg = _req$body.arImg, updatePaint = _req$body.updatePaint, id = req.params.id;
            _context20.next = 3;
            return _User["default"].findById(_id).populate("Installer");
          case 3:
            user = _context20.sent;
            _context20.next = 6;
            return _Installer["default"].exists({
              title: title
            });
          case 6:
            existsTitle = _context20.sent;
            if (!(!user || existsTitle)) {
              _context20.next = 9;
              break;
            }
            return _context20.abrupt("return", res.sendStatus(ErrorStatusCode));
          case 9:
            // 중복확인
            findInstaller = user.Installer.find(function (el) {
              return String(el._id) === String(id);
            }); // 이미 중복되어 있을떄 수정
            if (!findInstaller) {
              _context20.next = 35;
              break;
            }
            _context20.next = 13;
            return _Installer["default"].findByIdAndUpdate(findInstaller._id, {
              owner: _id,
              title: title,
              resulturl: imageUrl
            }, {
              "new": true
            });
          case 13:
            updateInstaller = _context20.sent;
            // 기존에 있는 가구 업데이트

            updatePaint.square.forEach( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(el) {
                var square;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        square = new _PaintClass.backUpdatePaint(el.id, el.sx, el.sy, el.ex, el.ey, el.color, el.border, el.name);
                        _context5.next = 3;
                        return square.updatePaint(updateInstaller._id, square.id, square);
                      case 3:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));
              return function (_x11) {
                return _ref6.apply(this, arguments);
              };
            }());
            updatePaint.img.forEach( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(el) {
                var img;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        img = new _PaintClass.backUpdatePaint(el.id, el.sx, el.sy, el.ex, el.ey, el.color, el.border, el.name);
                        _context6.next = 3;
                        return img.updatePaint(updateInstaller._id, img.id, img);
                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
              return function (_x12) {
                return _ref7.apply(this, arguments);
              };
            }());
            updatePaint.circle.forEach( /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(el) {
                var circle;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        circle = new _PaintClass.backUpdatePaint(el.id, el.sx, el.sy, el.ex, el.ey, el.color, el.border, el.name);
                        _context7.next = 3;
                        return circle.updatePaint(updateInstaller._id, circle.id, circle);
                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));
              return function (_x13) {
                return _ref8.apply(this, arguments);
              };
            }());
            updatePaint.straight.forEach( /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(el) {
                var straight;
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        straight = new _PaintClass.backUpdatePaint(el.id, el.sx, el.sy, el.ex, el.ey, el.color, el.border, el.name);
                        _context8.next = 3;
                        return straight.updatePaint(updateInstaller._id, straight.id, straight);
                      case 3:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));
              return function (_x14) {
                return _ref9.apply(this, arguments);
              };
            }());
            updatePaint.floor.forEach( /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(el) {
                var floor;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        floor = new _PaintClass.backUpdatePaint(el.id, el.sx, el.sy, el.ex, el.ey, el.color, el.border, el.name);
                        _context9.next = 3;
                        return floor.updatePaint(updateInstaller._id, floor.id, floor);
                      case 3:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));
              return function (_x15) {
                return _ref10.apply(this, arguments);
              };
            }());

            // 기존에 업데이트 말고 새로 생기는거

            arCircle.forEach( /*#__PURE__*/function () {
              var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(el) {
                var circle, paint;
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        circle = new _PaintClass.SubShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.border, el.color);
                        _context10.next = 3;
                        return circle.paintSave(updateInstaller, circle);
                      case 3:
                        paint = _context10.sent;
                        updateInstaller.paint.push(paint);
                      case 5:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));
              return function (_x16) {
                return _ref11.apply(this, arguments);
              };
            }());
            _context20.next = 22;
            return updateInstaller.save();
          case 22:
            arSquare.forEach( /*#__PURE__*/function () {
              var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(el) {
                var square, paint;
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        square = new _PaintClass.SubShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.border, el.color);
                        _context11.next = 3;
                        return square.paintSave(updateInstaller, square);
                      case 3:
                        paint = _context11.sent;
                        updateInstaller.paint.push(paint);
                      case 5:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));
              return function (_x17) {
                return _ref12.apply(this, arguments);
              };
            }());
            _context20.next = 25;
            return updateInstaller.save();
          case 25:
            arStraight.forEach( /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(el) {
                var straight, paint;
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        straight = new _PaintClass.SubShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.border, el.color);
                        _context12.next = 3;
                        return straight.paintSave(updateInstaller, straight);
                      case 3:
                        paint = _context12.sent;
                        updateInstaller.paint.push(paint);
                      case 5:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));
              return function (_x18) {
                return _ref13.apply(this, arguments);
              };
            }());
            _context20.next = 28;
            return updateInstaller.save();
          case 28:
            arFloor.forEach( /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(el) {
                var floor, paint;
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        floor = new _PaintClass.SubShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.border, el.color);
                        _context13.next = 3;
                        return floor.paintSave(updateInstaller, floor);
                      case 3:
                        paint = _context13.sent;
                        updateInstaller.paint.push(paint);
                      case 5:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));
              return function (_x19) {
                return _ref14.apply(this, arguments);
              };
            }());
            _context20.next = 31;
            return updateInstaller.save();
          case 31:
            arImg.forEach( /*#__PURE__*/function () {
              var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(el) {
                var img, paint;
                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        img = new _PaintClass.ImgShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.img);
                        _context14.next = 3;
                        return img.paintSave(updateInstaller, img);
                      case 3:
                        paint = _context14.sent;
                        updateInstaller.paint.push(paint);
                      case 5:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));
              return function (_x20) {
                return _ref15.apply(this, arguments);
              };
            }());
            _context20.next = 34;
            return updateInstaller.save();
          case 34:
            return _context20.abrupt("return", res.sendStatus(CorrectStatusCode));
          case 35:
            _context20.next = 37;
            return _Installer["default"].create({
              owner: _id,
              title: title,
              resulturl: imageUrl
            });
          case 37:
            installer = _context20.sent;
            arCircle.forEach( /*#__PURE__*/function () {
              var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(el) {
                var circle, paint;
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        circle = new _PaintClass.SubShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.border, el.color);
                        _context15.next = 3;
                        return circle.paintSave(installer, circle);
                      case 3:
                        paint = _context15.sent;
                        installer.paint.push(paint);
                      case 5:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              }));
              return function (_x21) {
                return _ref16.apply(this, arguments);
              };
            }());
            _context20.next = 41;
            return installer.save();
          case 41:
            arSquare.forEach( /*#__PURE__*/function () {
              var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(el) {
                var square, paint;
                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        square = new _PaintClass.SubShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.border, el.color);
                        _context16.next = 3;
                        return square.paintSave(installer, square);
                      case 3:
                        paint = _context16.sent;
                        installer.paint.push(paint);
                      case 5:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16);
              }));
              return function (_x22) {
                return _ref17.apply(this, arguments);
              };
            }());
            _context20.next = 44;
            return installer.save();
          case 44:
            arStraight.forEach( /*#__PURE__*/function () {
              var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(el) {
                var straight, paint;
                return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        straight = new _PaintClass.SubShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.border, el.color);
                        _context17.next = 3;
                        return straight.paintSave(installer, straight);
                      case 3:
                        paint = _context17.sent;
                        installer.paint.push(paint);
                      case 5:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              }));
              return function (_x23) {
                return _ref18.apply(this, arguments);
              };
            }());
            _context20.next = 47;
            return installer.save();
          case 47:
            arFloor.forEach( /*#__PURE__*/function () {
              var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(el) {
                var floor, paint;
                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        floor = new _PaintClass.SubShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.border, el.color);
                        _context18.next = 3;
                        return floor.paintSave(installer, floor);
                      case 3:
                        paint = _context18.sent;
                        installer.paint.push(paint);
                      case 5:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18);
              }));
              return function (_x24) {
                return _ref19.apply(this, arguments);
              };
            }());
            _context20.next = 50;
            return installer.save();
          case 50:
            arImg.forEach( /*#__PURE__*/function () {
              var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(el) {
                var img, paint;
                return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        img = new _PaintClass.ImgShape(el.sx, el.sy, el.ex, el.ey, el.name = el.property, el.img);
                        _context19.next = 3;
                        return img.paintSave(installer, img);
                      case 3:
                        paint = _context19.sent;
                        installer.paint.push(paint);
                      case 5:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19);
              }));
              return function (_x25) {
                return _ref20.apply(this, arguments);
              };
            }());
            _context20.next = 53;
            return installer.save();
          case 53:
            user.Installer.push(installer);
            _context20.next = 56;
            return user.save();
          case 56:
            return _context20.abrupt("return", res.sendStatus(CorrectStatusCode));
          case 57:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));
  return function postCreateInterior(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.postCreateInterior = postCreateInterior;
var deleteInstaller = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var _id, user, findInstaller, installer, index;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _id = req.session.user._id;
            _context22.next = 3;
            return _User["default"].findById(_id).populate("Installer");
          case 3:
            user = _context22.sent;
            if (user) {
              _context22.next = 6;
              break;
            }
            return _context22.abrupt("return", res.status(ErrorStatusCode).redirect("/installer/:id([a-z\\d+]{24})"));
          case 6:
            findInstaller = user.Installer.find(function (el) {
              return String(el.owner._id) === String(_id);
            });
            _context22.next = 9;
            return _Installer["default"].findById(findInstaller._id).populate("paint");
          case 9:
            installer = _context22.sent;
            installer.paint.filter(function (el) {
              return String(el.owner._id) === String(installer._id);
            }).forEach( /*#__PURE__*/function () {
              var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(el) {
                return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        _context21.next = 2;
                        return _Paint["default"].findByIdAndDelete(el._id);
                      case 2:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21);
              }));
              return function (_x28) {
                return _ref22.apply(this, arguments);
              };
            }());
            index = user.Installer.indexOf(findInstaller);
            user.Installer.splice(index, 1);
            _context22.next = 15;
            return _Installer["default"].findByIdAndDelete(findInstaller._id);
          case 15:
            return _context22.abrupt("return", res.redirect("/"));
          case 16:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));
  return function deleteInstaller(_x26, _x27) {
    return _ref21.apply(this, arguments);
  };
}();
exports.deleteInstaller = deleteInstaller;
var patchRegisterView = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var id, installer;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            id = req.params.id;
            _context23.next = 3;
            return _Installer["default"].findById(id);
          case 3:
            installer = _context23.sent;
            if (installer) {
              _context23.next = 6;
              break;
            }
            return _context23.abrupt("return", res.sendStatus(ErrorStatusCode));
          case 6:
            installer.meta.view += 1;
            _context23.next = 9;
            return installer.save();
          case 9:
            return _context23.abrupt("return", res.sendStatus(CorrectStatusCode));
          case 10:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));
  return function patchRegisterView(_x29, _x30) {
    return _ref23.apply(this, arguments);
  };
}();
exports.patchRegisterView = patchRegisterView;
var postMakeComment = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var id, user, text, interior, comment;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            id = req.params.id, user = req.session.user, text = req.body.text;
            _context24.next = 3;
            return _Installer["default"].findById(id);
          case 3:
            interior = _context24.sent;
            if (!(!interior || !user)) {
              _context24.next = 6;
              break;
            }
            return _context24.abrupt("return", res.sendStatus(ErrorStatusCode));
          case 6:
            _context24.next = 8;
            return _Comment["default"].create({
              text: text,
              owner: user._id,
              installer: interior._id
            });
          case 8:
            comment = _context24.sent;
            interior.comment.push(comment);
            _context24.next = 12;
            return interior.save();
          case 12:
            return _context24.abrupt("return", res.status(CorrectStatusCode).json({
              newCommentId: comment._id,
              text: text
            }));
          case 13:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));
  return function postMakeComment(_x31, _x32) {
    return _ref24.apply(this, arguments);
  };
}();
exports.postMakeComment = postMakeComment;
var deleteComment = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var id, user, comment, interior, index;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            id = req.params.id, user = req.session.user;
            _context25.next = 3;
            return _Comment["default"].findById(id).populate("installer");
          case 3:
            comment = _context25.sent;
            if (!(!comment && String(comment.owner._id) !== String(user._id))) {
              _context25.next = 6;
              break;
            }
            return _context25.abrupt("return", res.sendStatus(ErrorStatusCode));
          case 6:
            _context25.next = 8;
            return _Installer["default"].findById(comment.installer._id);
          case 8:
            interior = _context25.sent;
            index = interior.comment.indexOf(comment._id);
            interior.comment.splice(index, 1);
            _context25.next = 13;
            return interior.save();
          case 13:
            _context25.next = 15;
            return _Comment["default"].findByIdAndDelete(id);
          case 15:
            return _context25.abrupt("return", res.sendStatus(CorrectStatusCode));
          case 16:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));
  return function deleteComment(_x33, _x34) {
    return _ref25.apply(this, arguments);
  };
}();
exports.deleteComment = deleteComment;
var pathEditComment = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var user, id, text, comment;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            user = req.session.user, id = req.params.id, text = req.body.text;
            _context26.next = 3;
            return _Comment["default"].findById(id).populate("owner");
          case 3:
            comment = _context26.sent;
            if (!(!comment || String(comment.owner._id) !== String(user._id))) {
              _context26.next = 6;
              break;
            }
            return _context26.abrupt("return", res.sendStatus(ErrorStatusCode));
          case 6:
            _context26.next = 8;
            return _Comment["default"].findByIdAndUpdate(id, {
              text: text,
              owner: user._id,
              installer: comment.installer._id
            });
          case 8:
            return _context26.abrupt("return", res.status(CorrectStatusCode).json({
              editCommentId: comment._id,
              text: text
            }));
          case 9:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));
  return function pathEditComment(_x35, _x36) {
    return _ref26.apply(this, arguments);
  };
}();
exports.pathEditComment = pathEditComment;
var pathRegisterLike = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var user, id, _req$body2, userId, clicked, installer;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            user = req.session.user, id = req.params.id, _req$body2 = req.body, userId = _req$body2.userId, clicked = _req$body2.clicked;
            _context27.next = 3;
            return _Installer["default"].findById(id);
          case 3:
            installer = _context27.sent;
            if (!(String(user._id) !== String(userId) || !installer)) {
              _context27.next = 6;
              break;
            }
            return _context27.abrupt("return", res.sendStatus(ErrorStatusCode));
          case 6:
            if (!clicked) {
              _context27.next = 11;
              break;
            }
            installer.meta.like -= 1;
            _context27.next = 10;
            return installer.save();
          case 10:
            return _context27.abrupt("return", res.sendStatus(ErrorStatusCode));
          case 11:
            installer.meta.like += 1;
            _context27.next = 14;
            return installer.save();
          case 14:
            return _context27.abrupt("return", res.sendStatus(CorrectStatusCode));
          case 15:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));
  return function pathRegisterLike(_x37, _x38) {
    return _ref27.apply(this, arguments);
  };
}();
exports.pathRegisterLike = pathRegisterLike;
var postFilterRank = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var value, rank;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            value = req.body.value;
            _context28.t0 = value;
            _context28.next = _context28.t0 === "view" ? 4 : _context28.t0 === "like" ? 8 : _context28.t0 === "date" ? 12 : 16;
            break;
          case 4:
            _context28.next = 6;
            return _Installer["default"].find().sort({
              "meta.views": "desc"
            });
          case 6:
            rank = _context28.sent;
            return _context28.abrupt("break", 16);
          case 8:
            _context28.next = 10;
            return _Installer["default"].find().sort({
              "meta.like": "desc"
            });
          case 10:
            rank = _context28.sent;
            return _context28.abrupt("break", 16);
          case 12:
            _context28.next = 14;
            return _Installer["default"].find().sort({
              createAt: "desc"
            });
          case 14:
            rank = _context28.sent;
            return _context28.abrupt("break", 16);
          case 16:
            if (!rank) {
              _context28.next = 20;
              break;
            }
            return _context28.abrupt("return", res.status(301).json({
              rank: rank
            }));
          case 20:
            return _context28.abrupt("return", res.sendStatus(404));
          case 21:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));
  return function postFilterRank(_x39, _x40) {
    return _ref28.apply(this, arguments);
  };
}();
exports.postFilterRank = postFilterRank;