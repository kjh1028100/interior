"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.straight = exports.square = exports.img = exports.floor = exports.circle = void 0;
var _updatePaint = require("./updatePaint");
var square = [];
exports.square = square;
var img = [];
exports.img = img;
var circle = [];
exports.circle = circle;
var straight = [];
exports.straight = straight;
var floor = [];
exports.floor = floor;
var paint;
var drawContainer = document.querySelector(".drawingless");
var paints = drawContainer.dataset.paints;

// 사각형
// 원
// 직선
// 이미지
// 그리는 함수 제작

function loadPaint() {
  var paintArr = JSON.parse(paints);
  paintArr.forEach(function (el) {
    switch (el.name) {
      case "square":
        paint = new _updatePaint.squarePaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.border, el.name);
        square.push(paint);
        break;
      case "circle":
        paint = new _updatePaint.CirclePaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.border, el.name);
        circle.push(paint);
        break;
      case "straight":
        paint = new _updatePaint.StraightPaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.border, el.name);
        straight.push(paint);
        break;
      case "image":
        paint = new _updatePaint.imgPaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.name, el.list);
        img.push(paint);
        break;
      case "floor":
        paint = new _updatePaint.FloorPaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.border, el.name);
        floor.push(paint);
        break;
    }
  });
}
function init() {
  if (paints) {
    loadPaint();
    console.log(square);
  }
}
init();