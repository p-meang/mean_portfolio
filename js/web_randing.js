$(function () {
  $('.wrap > section').each(function (index) {
    if (index >= 3) { // 4번째 section부터 끝까지
      return; // 스크롤 이벤트를 적용하지 않음
    }
    $(this).on('wheel', function (e) {
      e.preventDefault();
      let nav;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        nav = $(this).prev(); /* 이전에 section을 저장 */
      } else {
        nav = $(this).next(); /* 다음에 section을 저장 */
      }
      if (nav.length) {
        let moveTop = nav.offset().top;
        $('html,body').stop().animate({
          scrollTop: moveTop,
        }, 1000);
      }
    });
  });


  let ht = $(window).height();
  /* 브라우저가 리사이즈 될 때마다 브라우저 높이값 재 저장 */
  $(window).on('resize', function () {
    ht = $(this).height();
  });

  // 스크롤 이벤트 시작
  let sc;
  let sectionI = $('.wrap>section').length;
  $(window).scroll(function () {
    sc = $(window).scrollTop(); /* 스크롤 될 때마다 콘솔의 인덱스 번호가 바뀜 */
    for (let i = 0; i < sectionI; i++) {
      if (sc >= ht * i && sc < ht * (i + 1)) {
        $('.wrap>section').eq(i).addClass('on').siblings().removeClass('on');
      }
    }
  });
  /* 마우스 휠 이벤트 끝 */

  // meaning_filmful 랜딩 페이지 responsive 링크 연결 770 320
  $('section.responsive ul li.tab').click(function () {
    window.open("meaning_filmful/index.html", "_blank", "width=980,height=800,left=450,top=100");
  });
  $('section.responsive ul li.mob').click(function () {
    window.open("meaning_filmful/index.html", "_blank", "width=412,height=860,left=725,top=100");
  });
});