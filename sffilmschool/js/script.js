$(function () {
  $('nav ul.gnb>li').hover(function () {
    $(this).find('ul.sub').stop().slideDown()
  }, function () {
    $(this).find('ul.sub').stop().slideUp()
  });
});