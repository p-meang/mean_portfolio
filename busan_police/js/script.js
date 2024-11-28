/* 메뉴 */
$('nav ul.gnb>li').hover(function () {
  $('.nav_bg, nav ul.gnb>li>ul.sub').stop().slideDown()
}, function () {
  $('.nav_bg, nav ul.gnb>li>ul.sub').stop().slideUp()
})

/* 배너 */
let swiper = new Swiper(".bn_swiper", {
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

/* 대민 서비스 및 신고하기 */
let swiper2 = new Swiper(".service_slide", {
  slidesPerView: 6,
  spaceBetween: 57,
  navigation: {
    clickable: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* 부산 경찰청에서 다양한 소식과 정보를 전합니다 */
let swiper3 = new Swiper(".contents_slide", {
  slidesPerView: 4,
  spaceBetween: 47,
  navigation: {
    clickable: true,
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* family 사이트 배너를 자동 슬라이드 */
let swiper4 = new Swiper(".family_slide", {
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  spaceBetween: 50,
  loop: true,
  speed: 3000,
  slidesPerView: 6,
  loopAdditionalSlides: 1,
})

AOS.init();
