const newYear: string = '01 01 2022';

const countdown = (e: string) => {
  let diff: number = new Date(e).valueOf() - new Date().valueOf();
  const total = Math.floor(diff / 1000);
  const days: number = Math.floor(total / 3600 / 24);
  const hours: number = Math.floor((total / 3600) % 24);
  const minutes: number = Math.floor(total / 60) % 60;
  const seconds: number = Math.floor(total) % 60;

  ui(days, hours, minutes, seconds);
};

const ui = (d: number, h: number, m: number, s: number) => {
  const days: HTMLElement = document.querySelector('#days');
  const hours: HTMLElement = document.querySelector('#hours');
  const minutes: HTMLElement = document.querySelector('#minutes');
  const seconds: HTMLElement = document.querySelector('#seconds');

  days.innerText = zero(d);
  hours.innerText = zero(h);
  minutes.innerText = zero(m);
  seconds.innerText = zero(s);
};

const zero = (e: number) => (e < 10 ? `0${e}`.toString() : e.toString());

//inject
countdown(newYear);

//timer
setInterval(() => countdown(newYear), 1000);
