$(function () {
  // lamp를 클릭했을 때 불이 켜짐
  $('.lamp_bottom').click(function () {
    $(this).toggleClass('on')
  })

  // 화장실 옆 표지판을 클릭했을 때 새가 날아감
  $('.sign').click(function () {
    $('.bird_t').addClass('on');
    $('.bird_b').addClass('on');
  });

  // 분수대 옆 소녀를 클릭했을 때 동전을 던짐
  $('.girl').click(function () {
    $('.girl .hand, .girl .coin').toggleClass('on')
  });

  // 블랙보이가 호버됐을 때, 핑크걸이 고개를 끄덕임
  $('.black_boy').hover(function () {
    $('.hair, .face').addClass('on')
  }, function () {
    $('.hair, .face').removeClass('on')
  });

  $('.couple').hover(function () {
    $('.couple .hover').addClass('on')
  }, function () {
    $('.couple .hover').removeClass('on')
  })
});