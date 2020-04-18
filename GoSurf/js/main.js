
$(function(){
  $('.header__slider').slick({
     infinite: true,
      slidesToShow: 1,
        slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
       arrows: true,
      asNavFor: '.header-dots',
      prevArrow: $('.arrow-left') ,
      nextArrow: $('.arrow-right') ,



  });

  $('.header-dots').slick({
      arrows: false,
         slidesToShow: 4,
         asNavFor: '.header__slider',
         focusOnSelect: true
     });

 $('.location__slider').slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.arrow-left-location') ,
        nextArrow: $('.arrow-right-location') ,
         asNavFor: '.world-map',
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
 ],
        });
$('.world-map').slick({
               slidesToShow: 8,
               slidesToScroll: 1,
               arrows:false,
               focusOnSelect:true,
                asNavFor: '.location__slider',
                responsive:[
                  {
                    breakpoint: 1255,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      centerMode: true,
                      focusOnSelect:false,
                       // centerPadding: '0px',
                    }
                  },
                  {
                    breakpoint: 1180,
                    settings: {
                      focusOnSelect:false,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      centerMode: true,

                       // centerPadding: '0px',
                    }
                  },
                  {
                    breakpoint: 750,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 2,
                      centerMode: true,
                        infinite:true,
                      focusOnSelect:false,
                       // centerPadding: '120px',
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      infinite:true,
                      slidesToScroll: 1,
                      centerMode: true,
                      focusOnSelect:false,
                     // centerPadding: '20px',
                    }
                  },
                  {
                    breakpoint: 405,
                    settings: {
                      slidesToShow: 1,
                      infinite:true,
                      slidesToScroll: 1,
                      centerMode: true,
                      focusOnSelect:false,
                     centerPadding: '2px',
                    }
                  },
                ],
               });

new WOW().init();

const plusNight = document.querySelector('.plus-night'),
      minusNight = document.querySelector('.minus-night');
      plusGuest = document.querySelector('.plus-guest'),
      minusGuest = document.querySelector('.minus-guest');
      night = document.querySelector('.night'),
      guest = document.querySelector('.guest'),
      sum = document.querySelector('.sum');


  let nights = 5;
  let guests = 4;


const countPlus = (prop) =>{
 if (prop.textContent >= 10) return
   prop === night ? nights++ : guests++;
   prop === night ? night.textContent = nights : guest.textContent = guests;
  render();
}
const countMinus = (prop) =>{
  if (prop.textContent <= 1) return
     prop === night ? nights-- : guests--;
     prop === night ? night.textContent = nights : guest.textContent = guests;
 render();
}
const render = ()=> {
   sum.textContent = nights * 55 + guests *25
}



      plusNight.addEventListener('click' , () => {
        countPlus(night)  });
      plusGuest.addEventListener('click' , () => {
        countPlus(guest) });

      minusNight.addEventListener('click' , () => {
        countMinus(night)  });
      minusGuest.addEventListener('click' , () => {
        countMinus(guest) });


$('.surfboard__option-first').on('click', ()=>{

    $('#first').toggleClass('display-none');
    $('.surfboard__option-first').toggleClass('minus')
});

$('.surfboard__option-second').on('click', ()=>{
    $('#second').toggleClass('display-none');
    $('.surfboard__option-second').toggleClass('minus')
});

$('.surfboard__option-third').on('click', ()=>{
    $('#third').toggleClass('display-none');
    $('.surfboard__option-third').toggleClass('minus')
});
$('.menu-btn-wrap').on('click' , function(){
  
    $('.menu').toggleClass('active');
})
});
