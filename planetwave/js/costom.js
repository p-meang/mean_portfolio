$(function () {
  /* 메뉴 버튼 클릭시 */
  $('ul#menu li').click(function (e) {
    e.preventDefault();


    // 변수 ht에 브라우저의 높이값 저장
    let ht = $(window).height();

    // 변수 i에 클릭한 ul#menu li의 순서 값을 저장
    let i = $(this).index();

    // 브라우저의 높익값 * 인덱스 값은 현재 박스의 스크롤 위치값과 동일
    let nowTop = i * ht;
    $('html,body').stop().animate({
      scrollTop: nowTop,
    }, 1300,);
  });

  /* 스크롤 이벤트 - 메뉴 on class */
  $(window).on('scroll', function () {
    let ht = $(window).height();
    let sct = $(window).scrollTop();
    const sectionLength = $('#wrap section').length;
    for (let i = 0; i < sectionLength; i++) {
      if (sct >= ht * i && sct < ht * (i + 1)) {
        $('ul#menu li').removeClass('on');
        $('ul#menu li').eq(i).addClass('on');
      }
    }
  });

  /* 마우스 휠 이벤트 */
  $('#wrap section').on('wheel', function (e) {
    e.preventDefault();
    let nav;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      nav = $(this).prev();
    } else {
      nav = $(this).next();
    }

    if (nav.length) {
      let moveTop = nav.offset().top;
      $('html,body').stop().animate({
        scrollTop: moveTop,
      }, 1300, 'swing'); /* https://superkts.com/jquery/@easingEffects 제이쿼리 easing 효과를 적용할 수 있음 */
    }
  });

  /* 마우스 무브 이벤트 */
  $('section').on('mousemove', function (e) {
    let posX = e.pageX;
    let posY = e.pageY;

    /* 첫번째 박스 이미지 위치값을 마우스 커서의 위치값과 연동 */
    $('.m11').css({
      bottom: 50 - (posY / 30),
      right: 20 - (posY / 30),
    })
    $('.m22').css({
      bottom: -150 + (posY / 20),
      left: 750 + (posX / 20),
    })

    /*   두번째 박스 이미지 위치값을 마우스 커서의 위치값과 연동 */
    $('.e33').css({
      bottom: -480 + (posY / 40),
      right: 50 + (posX / 40),
    })
    $('.e44').css({
      bottom: 30 + (posY / 40),
      right: 700 - (posX / 40),
    })

    /* 세번째 박스 이미지 위치값을 마우스 커서의 위치값과 연동 */
    $('.v66').css({
      bottom: -200 + (posY / 40),
      right: 200 - (posX / 40),
    })
    $('.v77').css({
      top: 150 + (posY / 30),
      right: -100 + (posX / 30),
    })

    /* 네번째 박스 이미지 위치값을 마우스 커서의 위치값과 연동 */
    $('.p41').css({
      bottom: -100 + (posY / 70),
      right: -50 - (posX / 70),
    })
    $('.p42').css({
      bottom: -300 + (posY / 30),
      right: -200 - (posX / 30),
    })
  })
});