"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.see = exports.search = exports.postUpload = exports.postReport = exports.postPageNotice = exports.postNoticeTotal = exports.postEdit = exports.postComment = exports.notice = exports.getUpload = exports.getReport = exports.getEdit = exports.getComment = exports.deleteNotice = void 0;
var _Notice = _interopRequireDefault(require("../models/Notice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// notice home
var notice = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var notice;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Notice["default"].find().sort({
              "meta.views": "desc"
            });
          case 2:
            notice = _context.sent;
            return _context.abrupt("return", res.render("notice/notice", {
              pageTitle: "Notice",
              notice: notice
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function notice(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//검색기능
exports.notice = notice;
var search = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var title, notice;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            title = req.query.title;
            notice = [];
            if (!title) {
              _context2.next = 6;
              break;
            }
            _context2.next = 5;
            return _Notice["default"].find({
              title: {
                $regex: new RegExp("".concat(title), "i")
              }
            });
          case 5:
            notice = _context2.sent;
          case 6:
            return _context2.abrupt("return", res.render("notice/search", {
              pageTitle: "Search Title",
              notice: notice
            }));
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function search(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//Notice Router
exports.search = search;
var getUpload = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", res.render("notice/upload", {
              pageTitle: "Upload Notice"
            }));
          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getUpload(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getUpload = getUpload;
var postUpload = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, title, content, file;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, content = _req$body.content, file = req.file; //이미지 파일을 업로드 할 경우
            if (!file) {
              _context4.next = 6;
              break;
            }
            _context4.next = 4;
            return _Notice["default"].create({
              title: title,
              description: content,
              image: file.path
            });
          case 4:
            _context4.next = 8;
            break;
          case 6:
            _context4.next = 8;
            return _Notice["default"].create({
              title: title,
              description: content
            });
          case 8:
            return _context4.abrupt("return", res.redirect("/notice"));
          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function postUpload(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.postUpload = postUpload;
var see = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, _notice;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _Notice["default"].findById(id);
          case 4:
            _notice = _context5.sent;
            _context5.next = 7;
            return _Notice["default"].findByIdAndUpdate(id, {
              meta: {
                views: _notice.meta.views + 1
              }
            });
          case 7:
            return _context5.abrupt("return", res.render("notice/see", {
              pageTitle: "".concat(_notice.title),
              notice: _notice
            }));
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return function see(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.see = see;
var getEdit = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, notice;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _Notice["default"].findById(id);
          case 3:
            notice = _context6.sent;
            return _context6.abrupt("return", res.render("notice/edit", {
              pageTitle: "Edit : ".concat(notice.title),
              notice: notice
            }));
          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function getEdit(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getEdit = getEdit;
var postEdit = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body2, title, content, id, file, exists;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body2 = req.body, title = _req$body2.title, content = _req$body2.content, id = req.params.id, file = req.file;
            _context7.next = 3;
            return _Notice["default"].exists({
              _id: id
            });
          case 3:
            exists = _context7.sent;
            if (exists) {
              _context7.next = 6;
              break;
            }
            return _context7.abrupt("return", res.redirect("/notice"));
          case 6:
            if (!file) {
              _context7.next = 11;
              break;
            }
            _context7.next = 9;
            return _Notice["default"].findByIdAndUpdate(id, {
              title: title,
              description: content,
              image: file.path
            }, {
              "new": true
            });
          case 9:
            _context7.next = 13;
            break;
          case 11:
            _context7.next = 13;
            return _Notice["default"].findByIdAndUpdate(id, {
              title: title,
              description: content
            });
          case 13:
            return _context7.abrupt("return", res.redirect("/notice"));
          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function postEdit(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.postEdit = postEdit;
var deleteNotice = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _context8.next = 3;
            return _Notice["default"].findByIdAndDelete(id);
          case 3:
            return _context8.abrupt("return", res.redirect("/notice"));
          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function deleteNotice(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteNotice = deleteNotice;
var getReport = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var id, notice;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = req.params.id;
            _context9.next = 3;
            return _Notice["default"].findById(id);
          case 3:
            notice = _context9.sent;
            return _context9.abrupt("return", res.render("notice/report", {
              pageTitle: "Report Notice",
              notice: notice
            }));
          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function getReport(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

//신고기능 보완 필요
exports.getReport = getReport;
var postReport = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var id, _req$body3, rtitle, rcontent, notice;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = req.params.id, _req$body3 = req.body, rtitle = _req$body3.rtitle, rcontent = _req$body3.rcontent;
            _context10.next = 3;
            return _Notice["default"].findById(id);
          case 3:
            notice = _context10.sent;
            _context10.next = 6;
            return _Notice["default"].findByIdAndUpdate(id, {
              rtitle: rtitle,
              rcontent: rcontent,
              report: {
                rcount: notice.report.rcount + 1
              }
            }, {
              "new": true
            });
          case 6:
            if (!(notice.report.rcount > 0)) {
              _context10.next = 10;
              break;
            }
            _context10.next = 9;
            return _Notice["default"].findByIdAndDelete(id);
          case 9:
            return _context10.abrupt("return", res.redirect("/notice"));
          case 10:
            return _context10.abrupt("return", res.redirect("/notice"));
          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return function postReport(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

//댓글기능
exports.postReport = postReport;
var getComment = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var id, notice;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id = req.params.id;
            _context11.next = 3;
            return _Notice["default"].findById(id);
          case 3:
            notice = _context11.sent;
            return _context11.abrupt("return", res.render("notice/see", {
              pageTitle: "see Notice",
              notice: notice
            }));
          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return function getComment(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.getComment = getComment;
var postComment = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var id, _req$body4, childid, childcomment, parentid, parentcomment, notice;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            id = req.params.id, _req$body4 = req.body, childid = _req$body4.childid, childcomment = _req$body4.childcomment, parentid = _req$body4.parentid, parentcomment = _req$body4.parentcomment;
            _context12.next = 3;
            return _Notice["default"].findById(id);
          case 3:
            notice = _context12.sent;
            _context12.next = 6;
            return _Notice["default"].findByIdAndUpdate(id, {
              parentid: parentid,
              parentcomment: parentcomment,
              childid: childid,
              childcomment: childcomment
            }, {
              "new": true
            });
          case 6:
            console.log(parentid, childid);
            return _context12.abrupt("return", res.render("notice/see", {
              pageTitle: "see Notice",
              notice: notice
            }));
          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return function postComment(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

//페이징 기법
exports.postComment = postComment;
var postNoticeTotal = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var baseCount, notice, count;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            baseCount = req.body.baseCount;
            _context13.next = 3;
            return _Notice["default"].find({});
          case 3:
            notice = _context13.sent;
            count = notice.length / baseCount;
            if (count) {
              _context13.next = 7;
              break;
            }
            return _context13.abrupt("return", res.sendStatus(404));
          case 7:
            return _context13.abrupt("return", res.status(301).json(count));
          case 8:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return function postNoticeTotal(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.postNoticeTotal = postNoticeTotal;
var postPageNotice = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body5, target, baseCount, notice, firstScope, endScope, targetNotice;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _req$body5 = req.body, target = _req$body5.target, baseCount = _req$body5.baseCount;
            _context14.next = 3;
            return _Notice["default"].find({}).sort({
              "meta.views": "desc"
            });
          case 3:
            notice = _context14.sent;
            firstScope = Number(target) - 1;
            endScope = Number(target) + 1;
            _context14.t0 = target;
            _context14.next = _context14.t0 === "1" ? 9 : 11;
            break;
          case 9:
            targetNotice = notice.splice(firstScope, firstScope + baseCount);
            return _context14.abrupt("break", 13);
          case 11:
            targetNotice = notice.splice(endScope, endScope + baseCount);
            return _context14.abrupt("break", 13);
          case 13:
            if (targetNotice) {
              _context14.next = 16;
              break;
            }
            targetNotice = null;
            return _context14.abrupt("return", res.sendStatus(404));
          case 16:
            return _context14.abrupt("return", res.status(301).json({
              targetNotice: targetNotice
            }));
          case 17:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return function postPageNotice(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
exports.postPageNotice = postPageNotice;