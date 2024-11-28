window.addEventListener('load', () => {
  /* Isotope를 사용하는 방법 */
  const grid = new Isotope('section', {
    itemSelector: 'article',
    columnWidth: 'article',
    trasitionDuration: '0.5s'
  });

  // 모든 버튼 변수에 저장
  const btns = document.querySelectorAll('main ul li');

  // 버튼의 개수만큼 반복
  for (let el of btns) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const sort = e.currentTarget.querySelector('a').getAttribute('href');
      grid.arrange({
        filter: sort,
      });

      // 다시 모든 버튼의 개수만큼 반복해서
      for (let el of btns) {
        el.classList.remove('on');
      }

      // 클릭한 대상만 선택해서 클래스명 on을 추가해 활성화시킴
      e.currentTarget.classList.add('on')
    })
  }
}) /* 이벤트가 로드되었을 때의 상황 */

/* 제이쿼리 사용 */
// 플레이 버튼
$('header .txt i').toggle().attr({
  i
})
