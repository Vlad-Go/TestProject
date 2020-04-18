$(document).ready(function(){
  $('.slider').slick({
  autoplay: true,
  fade: true,
  arrows:false,
  dots:true
  });



});
$('.menu-btn').on('click', function () {
  $('.header-nav').toggleClass("header-nav-static");

});
$('.nav-btn').on('click', function () {
    $('.header-nav').removeClass("header-nav-static");
})
