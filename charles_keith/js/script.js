$(function () {

  /* 검색창*/
  $('header .add img.one').click(function () {
    $('header .search_bg').slideToggle();
  })
  $('.search_bg .search .close').click(function () {
    $('header .search_bg').slideUp();
  });

  // footer fam
  $('footer .family p').eq(0).click(function () {
    $('footer .family p.none').slideToggle();
    $(this).find('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up')
  });

  // aside.top 화면 맨 처음으로 돌아가기
  $('aside.top ').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });

  /* 스크롤 이벤트 시작 */
  let evTop = $('.event').offset().top - 500;
  let prTop = $('.products').offset().top - 500;
  let lineTop = $('.line_up').offset().top - 400;
  $(window).scroll(function () {
    let st = $(this).scrollTop();

    // 이벤트 컨텐츠 액션 시작
    if (st >= evTop) {
      $('main .event article').eq(0).addClass('on').siblings().addClass('on').css({ 'transition-delay': '0.3s' })
    } else {
      $('main .event article').removeClass('on');
    };
    // 이벤트 컨텐츠 액션 끝

    // 라인업 액션 시작
    for (let i = 0; i < $('main .line_up .container ul.move li ').length; i++) {
      if (st >= lineTop + (i * 50)) {
        $('main .line_up .container ul.move li').eq(i).addClass('on').css({
          'transition-delay': (0.5 * i) + 's',
        });
        $('main .line_up .container ul.move li').eq(i).find('.txt_box').css({
          'transition-delay': (0.5 * i) + 's',
        });
      } else {
        $('main .line_up .container ul.move li').removeClass('on');
      }
    };
    // 라인업 액션 끝

    // products 액션 시작
    if (st >= prTop) {
      for (let i = 0; i < $('.products').find('li').length; i++) {
        $('.products').find('li').eq(i).addClass('on').css({ 'animation-delay': (0.2 * i) + 's' })
      }
    } else {
      $('.products').find('li').removeClass('on');
    };
    // products 액션 끝
  });
  /* 스크롤 이벤트 끝 */
});