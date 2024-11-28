$(function () {
  let slideIdx = 0;
  $('section.overview .img .image-container ul li').eq(slideIdx).siblings().hide();
  setInterval(function () {
    if (slideIdx < 2) {
      slideIdx++
    } else {
      slideIdx = 0;
    };
    $('section.overview .img .image-container ul li').eq(slideIdx).fadeIn().siblings().fadeOut()
  }, 3000)

  $('.wrap > section').each(function (index) {
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
    sc = $(window).scrollTop();
    for (let i = 0; i < sectionI; i++) {
      if (sc >= ht * i && sc < ht * (i + 1)) {
        $('.wrap>section').eq(i).addClass('on').siblings().removeClass('on');
      }
    }
  });
  /* 마우스 휠 이벤트 끝 */

  /* page 설명 시, 사진 클릭하면 각각 모달창 뜨도록 */
  $('section.main_page .kicboard').click(function () {
    $('.kic').addClass('on');
  });
  $('section.main_page .bird').click(function () {
    $('.bi').addClass('on');
  });
  $('section.main_page .coin').click(function () {
    $('.co').addClass('on');
  });
  $('section.main_page .blossoms').click(function () {
    $('.blo').addClass('on');
  });
  $('section.main_page .lamp').click(function () {
    $('.la').addClass('on');
  });
  $('section.main_page .manager').click(function () {
    $('.man').addClass('on');
  });
  $('section.main_page .next').click(function () {
    $('.ne').addClass('on');
  });
  $('section.main_page .friend').click(function () {
    $('.fri').addClass('on');
  });

  $('section.roding_page .blossoms_roding').click(function () {
    $('.blo_roding').addClass('on');
  });
  $('section.roding_page .prev').click(function () {
    $('.pr').addClass('on');
  });
  $('section.roding_page .couple_front').click(function () {
    $('.co_front').addClass('on');
  });
  $('section.roding_page .photographer').click(function () {
    $('.pho').addClass('on');
  });
  $('section.roding_page .selfie').click(function () {
    $('.sel').addClass('on');
  });
  $('section.roding_page .puppy').click(function () {
    $('.pu').addClass('on');
  });
  $('section.roding_page .couple_back').click(function () {
    $('.co_back').addClass('on');
  });

  /* 모달창 x 버튼 클릭시 모달창 사라짐 */
  $('.modal .m_inner button i').click(function () {
    $('.modal').fadeOut();
  });
})