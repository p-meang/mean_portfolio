/* 셀카 찍는 여성을 클릭 했을 때, 플래시 터짐 */
$('.selfie_all').click(function () {
  $('.selfie_click').toggleClass('on')
})

/* 나무를 클릭했을 때 벚꽃잎이 떨어짐 */
$('.blossoms_left').click(function () {
  $('.leaf_effect').addClass('on')

  // 3초 후에 'on' 클래스를 제거합니다.
  setTimeout(function () {
    $('.leaf_effect').removeClass('on');
  }, 3000);
});

/* 포토그래퍼를 클릭했을 때, 플래시 터짐 */
$('.photographer').click(function () {
  $('.photographer_click').addClass('on')

  // 3초 후에 'on' 클래스를 제거합니다.
  setTimeout(function () {
    $('.photographer_click').removeClass('on');
  }, 1000);
});

/*  */
$('.bush_bottom').click(function () {
  $('.button').addClass('on')
});


