"use strict";

var n_click = document.getElementById("non_click");
n_click.addEventListener("mouseover", function (event) {
  event.target.style.color = "aqua";
}, false);
n_click.addEventListener("mouseout", function (event) {
  event.target.style.color = "black";
}, false);