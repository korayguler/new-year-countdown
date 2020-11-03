"use strict";

var newYear = '01 01 2021';

var countdown = function countdown(e) {
  var diff = new Date(e) - new Date();
  var total = Math.floor(diff / 1000);
  var days = Math.floor(total / 3600 / 24);
  var hours = Math.floor(total / 3600 % 24);
  var minutes = Math.floor(total / 60) % 60;
  var seconds = Math.floor(total) % 60;
  ui(days, hours, minutes, seconds);
  console.log(total, days, hours, minutes, seconds);
};

var ui = function ui(d, h, m, s) {
  var days = document.querySelector('#days');
  var hours = document.querySelector('#hours');
  var minutes = document.querySelector('#minutes');
  var seconds = document.querySelector('#seconds');
  days.innerText = zero(d);
  hours.innerText = zero(h);
  minutes.innerText = zero(m);
  seconds.innerText = zero(s);
};

var zero = function zero(e) {
  return e < 10 ? "0".concat(e) : e;
}; //init


countdown(newYear); //timer

setInterval(function () {
  return countdown(newYear);
}, 1000);