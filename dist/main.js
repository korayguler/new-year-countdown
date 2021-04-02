var newYear = '01 01 2022';
var countdown = function (e) {
    var diff = new Date(e).valueOf() - new Date().valueOf();
    var total = Math.floor(diff / 1000);
    var days = Math.floor(total / 3600 / 24);
    var hours = Math.floor((total / 3600) % 24);
    var minutes = Math.floor(total / 60) % 60;
    var seconds = Math.floor(total) % 60;
    ui(days, hours, minutes, seconds);
};
var ui = function (d, h, m, s) {
    var days = document.querySelector('#days');
    var hours = document.querySelector('#hours');
    var minutes = document.querySelector('#minutes');
    var seconds = document.querySelector('#seconds');
    days.innerText = zero(d);
    hours.innerText = zero(h);
    minutes.innerText = zero(m);
    seconds.innerText = zero(s);
};
var zero = function (e) { return (e < 10 ? ("0" + e).toString() : e.toString()); };
//inject
countdown(newYear);
//timer
setInterval(function () { return countdown(newYear); }, 1000);
