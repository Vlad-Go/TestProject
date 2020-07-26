$('.main-section__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
   asNavFor: '.main-section__content-left-slider-labels'
});
$('.main-section__content-left-slider-labels').slick({
  infinite: true,
  centerMode: true,
  centerPadding: '90px',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  vertical: true,
  verticalSwiping: true,
  asNavFor: '.main-section__slider',
  responsive: [
  {
    breakpoint: 1400,
    settings: {
     centerPadding: '80px',
    }
  },
  {
    breakpoint: 650,
    settings: {
     centerPadding: '49px',
    }
  },
  {
    breakpoint: 400,
    settings: {
     centerPadding: '35px',
    }
  },

]
});
