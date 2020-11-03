const newYear = '01 01 2021';

const countdown = (e) => {
  let diff = new Date(e) - new Date();
  const total = Math.floor(diff / 1000);
  const days = Math.floor(total / 3600 / 24);
  const hours = Math.floor((total / 3600) % 24);
  const minutes = Math.floor(total / 60) % 60;
  const seconds = Math.floor(total) % 60;
  ui(days, hours, minutes, seconds);
  console.log(total, days, hours, minutes, seconds);
};

const ui = (d, h, m, s) => {
  const days = document.querySelector('#days');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');

  days.innerText = zero(d);
  hours.innerText = zero(h);
  minutes.innerText = zero(m);
  seconds.innerText = zero(s);
};

const zero = (e) => (e < 10 ? `0${e}` : e);

//init
countdown(newYear);

//timer
setInterval(() => countdown(newYear), 1000);
