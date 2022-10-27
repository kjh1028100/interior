"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.see = exports.postLogin = exports.postJoin = exports.postEdit = exports.postChangePassword = exports.logout = exports.home = exports.getLogin = exports.getJoin = exports.getEdit = exports.getChangePassword = exports.KakaoStartLogin = exports.KakaoFinishLogin = exports.GithubStartLogin = exports.GithubFinishLogin = void 0;
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _User = _interopRequireDefault(require("../models/User"));
var _Installer = _interopRequireDefault(require("../models/Installer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var ErrorStatusCode = 400;
var ErrorStatusCode2 = 404;
var ConfirmStatusCode = 201;
var home = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var installer;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Installer["default"].find().populate("owner");
          case 2:
            installer = _context.sent;
            return _context.abrupt("return", res.render("home", {
              pageTitle: "Home",
              installer: installer
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function home(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.home = home;
var getJoin = function getJoin(req, res) {
  return res.render("user/join", {
    pageTitle: "Join"
  });
};
exports.getJoin = getJoin;
var postJoin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, id, password, password1, email, username, pageTitle, joinPath, exists;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, password = _req$body.password, password1 = _req$body.password1, email = _req$body.email, username = _req$body.username;
            pageTitle = "Join";
            joinPath = "user/join"; //   password 확인
            if (!(password !== password1)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", res.status(ErrorStatusCode).render(joinPath, {
              pageTitle: pageTitle,
              errorMessage: "Disaccord your password"
            }));
          case 5:
            _context2.next = 7;
            return _User["default"].exists({
              $or: [{
                id: id
              }, {
                email: email
              }]
            });
          case 7:
            exists = _context2.sent;
            if (!exists) {
              _context2.next = 10;
              break;
            }
            return _context2.abrupt("return", res.status(ErrorStatusCode).render(joinPath, {
              pageTitle: pageTitle,
              errorMessage: "id or email already account"
            }));
          case 10:
            _context2.prev = 10;
            _context2.next = 13;
            return _User["default"].create({
              id: id,
              password: password,
              email: email,
              username: username
            });
          case 13:
            return _context2.abrupt("return", res.status(ConfirmStatusCode).redirect("/login"));
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](10);
            return _context2.abrupt("return", res.status(ErrorStatusCode2).render("404", {
              pageTitle: "".concat(_context2.t0._message)
            }));
          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[10, 16]]);
  }));
  return function postJoin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.postJoin = postJoin;
var getLogin = function getLogin(req, res) {
  return res.render("user/login", {
    pageTitle: "login"
  });
};
exports.getLogin = getLogin;
var postLogin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var pageTitle, loginPath, _req$body2, id, password, user, ok;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            pageTitle = "login";
            loginPath = "user/login";
            _req$body2 = req.body, id = _req$body2.id, password = _req$body2.password;
            _context3.prev = 3;
            _context3.next = 6;
            return _User["default"].findOne({
              $and: [{
                id: id
              }, {
                socialOnly: false
              }]
            });
          case 6:
            user = _context3.sent;
            if (user) {
              _context3.next = 9;
              break;
            }
            return _context3.abrupt("return", res.status(ErrorStatusCode).render(loginPath, {
              pageTitle: pageTitle,
              errorMessage: alert('"Confirm id"')
            }));
          case 9:
            _context3.next = 11;
            return _bcrypt["default"].compare(password, user.password);
          case 11:
            ok = _context3.sent;
            if (ok) {
              _context3.next = 14;
              break;
            }
            return _context3.abrupt("return", res.status(ErrorStatusCode).render(loginPath, {
              pageTitle: pageTitle,
              errorMessage: alert('Confirm password')
            }));
          case 14:
            // session에 추가
            req.session.loggedIn = true;
            req.session.user = user;
            return _context3.abrupt("return", res.status(ConfirmStatusCode).redirect("/"));
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](3);
            return _context3.abrupt("return", res.status(ErrorStatusCode2).render("404", {
              pageTitle: "".concat(_context3.t0._message)
            }));
          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 19]]);
  }));
  return function postLogin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.postLogin = postLogin;
var GithubStartLogin = function GithubStartLogin(req, res) {
  var baseUrl = "https://github.com/login/oauth/authorize";
  var config = {
    client_id: process.env.GH_PUBLIC,
    scope: "read:user user:email",
    allow_signup: false
  };
  var params = new URLSearchParams(config).toString();
  var finalUrl = "".concat(baseUrl, "?").concat(params);
  return res.redirect(finalUrl);
};
exports.GithubStartLogin = GithubStartLogin;
var GithubFinishLogin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var baseUrl, config, params, finalUrl, json, access_token, apiUrl, userData, emailData, emailObj, user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            baseUrl = "https://github.com/login/oauth/access_token";
            config = {
              client_id: process.env.GH_PUBLIC,
              client_secret: process.env.GH_SECRET,
              code: req.query.code
            };
            params = new URLSearchParams(config).toString();
            finalUrl = "".concat(baseUrl, "?").concat(params);
            _context4.next = 6;
            return (0, _nodeFetch["default"])(finalUrl, {
              method: "POST",
              headers: {
                Accept: "application/json"
              }
            });
          case 6:
            _context4.next = 8;
            return _context4.sent.json();
          case 8:
            json = _context4.sent;
            if (!("access_token" in json)) {
              _context4.next = 37;
              break;
            }
            access_token = json.access_token;
            apiUrl = "https://api.github.com";
            _context4.next = 14;
            return (0, _nodeFetch["default"])("".concat(apiUrl, "/user"), {
              headers: {
                Authorization: "token ".concat(access_token)
              }
            });
          case 14:
            _context4.next = 16;
            return _context4.sent.json();
          case 16:
            userData = _context4.sent;
            _context4.next = 19;
            return (0, _nodeFetch["default"])("".concat(apiUrl, "/user/emails"), {
              headers: {
                Authorization: "token ".concat(access_token)
              }
            });
          case 19:
            _context4.next = 21;
            return _context4.sent.json();
          case 21:
            emailData = _context4.sent;
            emailObj = emailData.find(function (email) {
              return email.primary === true && email.verified === true;
            });
            if (emailObj) {
              _context4.next = 25;
              break;
            }
            return _context4.abrupt("return", res.status(ErrorStatusCode).render("user/login", {
              pageTitle: "Login",
              errorMessage: "email not found"
            }));
          case 25:
            _context4.next = 27;
            return _User["default"].findOne({
              $or: [{
                email: emailObj.email
              }, {
                id: userData.login
              }]
            });
          case 27:
            user = _context4.sent;
            if (user) {
              _context4.next = 32;
              break;
            }
            _context4.next = 31;
            return _User["default"].create({
              id: userData.login,
              email: emailObj.email,
              username: userData.name === null ? "undefined" : userData.name,
              password: "",
              socialOnly: true,
              avatarUrl: userData.avatar_url
            });
          case 31:
            user = _context4.sent;
          case 32:
            req.session.loggedIn = true;
            req.session.user = user;
            return _context4.abrupt("return", res.redirect("/"));
          case 37:
            return _context4.abrupt("return", res.status(ErrorStatusCode).render("user/login", {
              pageTitle: "Login",
              errorMessage: "Fail Access Github"
            }));
          case 38:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function GithubFinishLogin(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.GithubFinishLogin = GithubFinishLogin;
var KakaoStartLogin = function KakaoStartLogin(req, res) {
  var baseUrl = "https://kauth.kakao.com/oauth/authorize";
  var config = {
    client_id: process.env.KAKAO_KEY,
    redirect_uri: process.env.REDIRECT_URL,
    response_type: "code"
  };
  var params = new URLSearchParams(config).toString();
  var finalUrl = "".concat(baseUrl, "?").concat(params);
  return res.redirect(finalUrl);
};
exports.KakaoStartLogin = KakaoStartLogin;
var KakaoFinishLogin = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var baseUrl, config, params, finalUrl, json, access_token, apiUrl, userData, _userData$kakao_accou, _userData$kakao_accou2, nickname, thumbnail_image_url, email, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            baseUrl = "https://kauth.kakao.com/oauth/token";
            config = {
              grant_type: "authorization_code",
              client_id: process.env.KAKAO_KEY,
              redirect_uri: process.env.REDIRECT_URL,
              code: req.query.code
            };
            params = new URLSearchParams(config).toString();
            finalUrl = "".concat(baseUrl, "?").concat(params);
            _context5.next = 6;
            return (0, _nodeFetch["default"])(finalUrl, {
              headers: {
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
              }
            });
          case 6:
            _context5.next = 8;
            return _context5.sent.json();
          case 8:
            json = _context5.sent;
            if (!("access_token" in json)) {
              _context5.next = 32;
              break;
            }
            access_token = json.access_token;
            apiUrl = "https://kapi.kakao.com/v2/user/me";
            _context5.next = 14;
            return (0, _nodeFetch["default"])(apiUrl, {
              headers: {
                Authorization: " Bearer ".concat(access_token),
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
              }
            });
          case 14:
            _context5.next = 16;
            return _context5.sent.json();
          case 16:
            userData = _context5.sent;
            if ("properties" in userData && "kakao_account" in userData) {
              _context5.next = 19;
              break;
            }
            return _context5.abrupt("return", res.redirect("/login"));
          case 19:
            _userData$kakao_accou = userData.kakao_account, _userData$kakao_accou2 = _userData$kakao_accou.profile, nickname = _userData$kakao_accou2.nickname, thumbnail_image_url = _userData$kakao_accou2.thumbnail_image_url, email = _userData$kakao_accou.email;
            _context5.next = 22;
            return _User["default"].findOne({
              $or: [{
                username: nickname
              }, {
                email: email
              }]
            });
          case 22:
            user = _context5.sent;
            if (user) {
              _context5.next = 27;
              break;
            }
            _context5.next = 26;
            return _User["default"].create({
              // kakao는 아이디 형식이 이메일(require빼고 삽입가능)
              id: email,
              password: "",
              socialOnly: true,
              username: nickname,
              email: email,
              avatarUrl: thumbnail_image_url
            });
          case 26:
            user = _context5.sent;
          case 27:
            req.session.loggedIn = true;
            req.session.user = user;
            return _context5.abrupt("return", res.redirect("/"));
          case 32:
            return _context5.abrupt("return", res.status(ErrorStatusCode).render("user/login", {
              pageTitle: "Login",
              errorMessage: "Fail Access Kakao"
            }));
          case 33:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function KakaoFinishLogin(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.KakaoFinishLogin = KakaoFinishLogin;
var logout = function logout(req, res) {
  req.session.destroy();
  return res.redirect("/");
};
exports.logout = logout;
var see = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, user;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _User["default"].findById(id).populate("Installer");
          case 4:
            user = _context6.sent;
            if (user) {
              _context6.next = 7;
              break;
            }
            return _context6.abrupt("return", res.redirect("/"));
          case 7:
            console.log(user);
            return _context6.abrupt("return", res.render("user/see", {
              pageTitle: "".concat(user.username),
              user: user
            }));
          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](1);
            return _context6.abrupt("return", res.status(ErrorStatusCode).render("404", {
              pageTitle: "".concat(_context6.t0._message)
            }));
          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 11]]);
  }));
  return function see(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.see = see;
var getEdit = function getEdit(req, res) {
  var user = req.session.user;
  return res.render("user/edit", {
    pageTitle: "".concat(user.username, " Edit Page")
  });
};
exports.getEdit = getEdit;
var postEdit = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$session$user, _id, avatarUrl, beforeId, beforeUsername, _req$body3, id, email, username, file, pagePath, pageTitle, exists, updateUser;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$session$user = req.session.user, _id = _req$session$user._id, avatarUrl = _req$session$user.avatarUrl, beforeId = _req$session$user.id, beforeUsername = _req$session$user.username, _req$body3 = req.body, id = _req$body3.id, email = _req$body3.email, username = _req$body3.username, file = req.file;
            pagePath = "user/edit";
            pageTitle = "".concat(beforeUsername, " Edit Page"); // 중복확인
            if (!(beforeId === id || beforeUsername === username)) {
              _context7.next = 5;
              break;
            }
            return _context7.abrupt("return", res.status(ErrorStatusCode).render(pagePath, {
              pageTitle: pageTitle,
              errorMessage: "Already account"
            }));
          case 5:
            _context7.next = 7;
            return _User["default"].exists({
              $or: [{
                email: email
              }, {
                username: username
              }]
            });
          case 7:
            exists = _context7.sent;
            if (!exists) {
              _context7.next = 10;
              break;
            }
            return _context7.abrupt("return", res.status(ErrorStatusCode).render(pagePath, {
              pageTitle: pageTitle,
              errorMessage: "Already account"
            }));
          case 10:
            _context7.next = 12;
            return _User["default"].findByIdAndUpdate(_id, {
              avatarUrl: file ? file.path : avatarUrl,
              id: id,
              email: email,
              username: username
            }, {
              "new": true
            });
          case 12:
            updateUser = _context7.sent;
            req.session.user = updateUser;
            return _context7.abrupt("return", res.redirect("/user/edit"));
          case 15:
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
var getChangePassword = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var user;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            user = req.session.user;
            if (user.socialOnly) {
              _context8.next = 3;
              break;
            }
            return _context8.abrupt("return", res.render("user/change-password", {
              pageTitle: "Change Password"
            }));
          case 3:
            return _context8.abrupt("return", res.redirect("/"));
          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function getChangePassword(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getChangePassword = getChangePassword;
var postChangePassword = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _id, _req$body4, oldPassword, newPassword, confirmPassword, user, pagePath, pageTitle, ok;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _id = req.session.user._id, _req$body4 = req.body, oldPassword = _req$body4.oldPassword, newPassword = _req$body4.newPassword, confirmPassword = _req$body4.confirmPassword;
            _context9.next = 3;
            return _User["default"].findById(_id);
          case 3:
            user = _context9.sent;
            pagePath = "user/change-password";
            pageTitle = "".concat(user.username, " Change Password");
            _context9.next = 8;
            return _bcrypt["default"].compare(oldPassword, user.password);
          case 8:
            ok = _context9.sent;
            if (ok) {
              _context9.next = 11;
              break;
            }
            return _context9.abrupt("return", res.status(ErrorStatusCode).render(pagePath, {
              pageTitle: pageTitle,
              errorMessage: "Not Account"
            }));
          case 11:
            if (!(newPassword !== confirmPassword)) {
              _context9.next = 13;
              break;
            }
            return _context9.abrupt("return", res.status(ErrorStatusCode).render(pagePath, {
              pageTitle: pageTitle,
              errorMessage: "Confirm New Password"
            }));
          case 13:
            user.password = newPassword;
            _context9.next = 16;
            return user.save();
          case 16:
            return _context9.abrupt("return", res.status(ConfirmStatusCode).redirect("/user/edit"));
          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function postChangePassword(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.postChangePassword = postChangePassword;