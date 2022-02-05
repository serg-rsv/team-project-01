const timeCafes = 2000;
const timeTrucks = 2000;
const step = 1;

function outCafes(num, elem) {
  let l = document.querySelector('#' + elem);
  n = 0;
  let t = Math.round(timeCafes / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    l.innerHTML = n;
  }, t);
}

outCafes(16, 'out-1');

function outNum2(num, elem) {
  let l = document.querySelector('#' + elem);
  m = 0;
  let t = Math.round(timeTrucks / (num / step));
  let interval = setInterval(() => {
    m = m + step;
    if (m == num) {
      clearInterval(interval);
    }
    l.innerHTML = m;
  }, t);
}

outNum2(23, 'out-2');
