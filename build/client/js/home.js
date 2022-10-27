"use strict";

var outer = document.querySelector('.outer');
var innerList = document.querySelector('.inner-list');
var inners = document.querySelectorAll('.inner');
var currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach(function (inner) {
  inner.style.width = "".concat(outer.clientWidth, "px"); // inner의 width를 모두 outer의 width로 만들기
});

innerList.style.width = "".concat(outer.clientWidth * inners.length, "px"); // innerList의 width를 inner의 width * inner의 개수로 만들기

var buttonLeft = document.querySelector('.button-left');
var buttonRight = document.querySelector('.button-right');
buttonLeft.addEventListener('click', function () {
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
  innerList.style.marginLeft = "-".concat(outer.clientWidth * currentIndex, "px"); // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

buttonRight.addEventListener('click', function () {
  currentIndex++;
  currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
  innerList.style.marginLeft = "-".concat(outer.clientWidth * currentIndex, "px"); // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

function getInterval() {
  return setInterval(function () {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = "-".concat(outer.clientWidth * currentIndex, "px");
  }, 2000);
}
var interval = getInterval(); // interval 등록