$(function () {
  /* 마우스 휠 이벤트 시작 */
  $('.wrap > section').on('wheel', function (e) {
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

  let ht = $(window).height();
  /* 브라우저가 리사이즈 될 때마다 브라우저 높이값 재 저장 */
  $(window).on('resize', function () {
    ht = $(this).height();
  });

  // 스크롤 이벤트 시작
  let sc;
  let sectionI = $('.wrap>section').length;
  $(window).scroll(function () {
    sc = $(window).scrollTop();
    for (let i = 0; i < sectionI; i++) {
      if (sc >= ht * i && sc < ht * (i + 1)) {
        $('.wrap>section').eq(i).addClass('on').siblings().removeClass('on');
      }
    }
  });
  /* 마우스 휠 이벤트 끝 */

});