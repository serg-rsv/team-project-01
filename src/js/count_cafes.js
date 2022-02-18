const timeCafes = 2000;
const step = 1;

function outCafes(num, elem) {
  let l = document.querySelector('#' + elem);
  let n = 0;
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
outCafes(23, 'out-2');
