

$('.header__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
});
$('.statistic__slider').slick({
  infinite: true,
  slidesToShow: 2,
  centerMode: true,
  slidesToScroll: 1,
   autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
   {
     breakpoint: 980,
     settings: {
       slidesToShow: 1,
         centerPadding: '140px',
     }
   },
   {
     breakpoint: 790,
     settings: {
       slidesToShow: 1,
         centerPadding: '40px',
     }
   },
   {
     breakpoint: 500,
     settings: {
       slidesToShow: 1,
         centerPadding: '5px',
     }
   },
 ]
});
 new WOW().init();

const factorItem = document.querySelectorAll('.factors__item'),
      mask = document.querySelectorAll('.mask'),
      factorsItemTitle = document.querySelectorAll('.factors__item-title'),
      factorsItemText = document.querySelectorAll('.factors__item-text'),
      menuBtn = document.querySelector('.menu'),
      closeBtn = document.querySelector('.closeBtn'),
      nav = document.querySelector('.nav');


const toggleClass = (i) => {
    const thisMask = mask[i];
    const  thisTitle = factorsItemTitle[i];
    const thisText = factorsItemText[i];

   thisMask.classList.toggle('show');
   thisTitle.classList.toggle('active');
   thisText.classList.toggle('active');
}


const toggleMenu = () => {
  nav.classList.toggle('nav-active')
}

// ----events--------------------------------------
factorItem.forEach((item,i) => {
  item.addEventListener('click', () => {
     toggleClass(i);
  });
});

menuBtn.addEventListener('click',toggleMenu);
closeBtn.addEventListener('click',toggleMenu);
