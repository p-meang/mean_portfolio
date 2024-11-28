$(function () {

  // 스크롤 이벤트 (각 영역이 스크롤 될 위치를 저장)
  let conTop = $('.concept ').offset().top - 800;
  let popTop = $('.popular').offset().top - 800;
  let monTop = $('.monthly').offset().top - 800;
  let reqTop = $('.request').offset().top - 850;
  let comTop = $('.community').offset().top - 850;

  let ww = $(window).width();
  mediaFn(ww)
  $(window).on('resize', function () {
    ww = $(window).width();
    mediaFn(ww)
  });

  function mediaFn(ww) {
    if (ww >= 980) {
      // 스크롤 탑 위치를 st에 저장
      $(window).scroll(function () {
        let st = $(this).scrollTop();
        // concept 액션 시작
        if (st >= conTop) {
          $('.concept').addClass('on').css({ 'transition-delay': '0.3s' })
        } else {
          $('.concept').removeClass('on');
        };

        // popular 액션 시작
        if (st >= popTop) {
          $('.popular, section.popular .shape').addClass('on').css({ 'transition-delay': '0.3s' })
        } else {
          $('.popular, section.popular .shape').removeClass('on');
        };

        // monthly 액션 시작
        if (st >= monTop) {
          $('.monthly').addClass('on').css({ 'transition-delay': '0.3s' })
        } else {
          $('.monthly').removeClass('on');
        };

        // request 액션 시작
        if (st >= reqTop) {
          $('.request').addClass('on').css({ 'transition-delay': '0.3s' })
        } else {
          $('.request').removeClass('on');
        };

        // community 액션 시작
        if (st >= comTop) {
          $('.community').addClass('on').css({ 'transition-delay': '0.3s' })
        } else {
          $('.community').removeClass('on');
        };
      })
    } else {
      $('.concept,.popular,section.popular .shape,.monthly,.request,.community').addClass('on')
    }
  }


  // ul.gnb, ul.sub
  $('header nav ul.gnb>li').hover(function () {
    $(this).find('ul.sub').stop().fadeIn()
  }, function () {
    $(this).find('ul.sub').stop().fadeOut()
  });

  $('header .sr_my .my a:last-child').click(function () {
    $('header nav ul.gnb').stop().toggle();
  });

  // 메인 비주얼
  let swiper1 = new Swiper(".main_visual", {
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      loop: true
    },
  });

  // 싸이월드 메뉴 탭을 눌렀을 때 각각 영역이 나오게 함
  $('ul.tab >li').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    let i = $(this).index();
    if (i == 4) {
      $('.modal').addClass('on');
    } else {
      $('.rg_tab ul.right>li').removeClass('on').eq(i).addClass('on');
    }
  })
  // 즐겨찾기 팝업창의 예, 아니오를 눌렀을 때
  $('.modal_inner .answer button').click(function () {
    $('.modal').removeClass('on');
  })

  // 싸이월드 프로필 영역 작가 활동 슬라이드
  let swiper2 = new Swiper(".proSwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      412: { //브라우저가 412보다 클 때
        slidesPerView: 4,
        spaceBetween: 15,
      },
      980: {  //브라우저가 980보다 클 때
        slidesPerView: 4,
        spaceBetween: 75,
      },
    },
  });

  // monthly 필름 슬라이드
  let swiper3 = new Swiper(".t_film, .b_film", {
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    loop: true,
    speed: 4000,
    slidesPerView: 2,
    loopAdditionalSlides: 1,
    breakpoints: {
      412: {  //브라우저가 412보다 클 때
        speed: 4000,
        slidesPerView: 3,
      },
      980: {  //브라우저가 980보다 클 때
        speed: 4000,
        slidesPerView: 5,
      },
    },
  });
  $('main section.request .list li.window .bar ul li:last-child a i').click(function () {
    $(this).parent('li.window').css({ disPlay: none })
  });

  // request x 버튼을 눌렀을 때 window 사라짐
  $('li.window button').click(function () {
    $(this).parents('.window').fadeOut();
  });
})