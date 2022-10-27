"use strict";

var $steps = document.getElementById('steps');
var $display = document.getElementById('display');
var $area_btn = document.getElementById('area-btn');
var data = {
  prev: '',
  curr: '',
  operator: undefined,
  pressedResult: false
};
$area_btn.addEventListener('click', function (e) {
  var target = e.target;
  if (target.tagName !== 'BUTTON') {
    return;
  }

  //리셋
  if (target.id == "reset") {
    reset_data();
    return;
  }

  //숫자
  if (target.classList.contains('num')) {
    on_num(data.operator, target);
  }

  //연산자
  if (target.classList.contains('op')) {
    on_ops(target);
  }

  //=
  if (target.id == 'btn_result') {
    show_result();
  }
  target.blur();
});

/*숫자버튼*/
function on_num(bool, target) {
  var val = target.dataset.val;
  var prevOrcurr = bool ? 'curr' : 'prev';
  if (val == "-1") {
    data[prevOrcurr] = String(Number(data[prevOrcurr]) * -1);
  } else {
    data[prevOrcurr] += val;
  }
  $display.textContent = data[prevOrcurr];
}

/*연산자*/
function on_ops(target) {
  $steps.classList.remove('off');
  var val_op = target.dataset.val;
  data.operator = val_op;
  if (data.prev == undefined) {
    return;
  }
  if (!data.pressedResult && data.curr) {
    show_result();
  }
  show_middleStep();
  data.curr = '';
  data.pressedResult = false;
}

/*=*/
function show_result() {
  if (data.prev == undefined || data.curr == undefined || !data.operator) {
    return;
  }
  data.pressedResult = true;
  show_finalStep();
  data.prev = caculSwitch();
  $display.textContent = data.prev;
} //show_result

function caculSwitch() {
  var prev = data.prev,
    curr = data.curr,
    operator = data.operator;
  switch (operator) {
    case "+":
      return Number(prev) + Number(curr);
    case "-":
      return Number(prev) - Number(curr);
    case "*":
      return Number(prev) * Number(curr);
    case "/":
      return Number(prev) / Number(curr);
  }
}
function operator_to_string() {
  var operator = data.operator;
  switch (operator) {
    case "+":
      return "+";
    case "-":
      return "-";
    case "*":
      return "×";
    case "/":
      return "÷";
  }
}
function show_middleStep() {
  var step_str = "".concat(data.prev, " ").concat(operator_to_string());
  $steps.textContent = step_str;
}
function show_finalStep() {
  var cacul_str = "".concat(data.prev, " ").concat(operator_to_string(), " ").concat(data.curr);
  $steps.textContent = "".concat(cacul_str, " =");
}

/*리셋*/
function reset_data() {
  data.prev = '';
  data.curr = '';
  $steps.textContent = '&nbsp';
  $steps.classList.add('off');
  $display.textContent = '0';
  data.operator = undefined;
  data.pressedResult = true;
}