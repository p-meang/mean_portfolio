const frame = 'section';
const box = 'article';
const speed = '0.5';
const activeClass = 'on';
const btn = document.querySelectorAll('main ul li');
let grid;

window.addEventListener('load', () => {
  init();
  filter(btn);
});

// 화면 초기화 함수 정의
function init() {
  grid = new Isotope(frame, {
    itemSelector: box,
    columnWidth: box,
    trasitionDuration: speed,
  })
};

function filter(arr) {
  for (let el of arr) {
    el.addEventListener('click', e => {
      e.preventDefault();
      const sort = e.currentTarget.querySelector('a').getAttribute('href');
      grid.arrange({
        filter: sort,
      })
      for (let el of arr) {
        el.classList.remove('on');
      }
      e.currentTarget.classList.add('on')
    })
  }
};