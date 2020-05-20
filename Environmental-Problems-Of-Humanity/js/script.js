

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
      nav = document.querySelector('.nav'),
      navBlock = document.querySelectorAll('.nav_block');


const toggleCard = (i) => {
    const thisMask = mask[i];
    const  thisTitle = factorsItemTitle[i];
    const thisText = factorsItemText[i];

   thisMask.classList.toggle('show');
   thisTitle.classList.toggle('active');
   thisText.classList.toggle('active');
}


const toggleMenu = () => {
  nav.classList.toggle('nav-active');
  navBlock.forEach((item) => {
    item.classList.toggle('fadeIn')
  });

}

const scrollTo = (from,to) => {
  $(`.${from}`).on('click',(e) => {
    e.preventDefault();
    let top = $(`.${to}`).offset().top;
    $('html,body').animate({
      scrollTop:top
    },700)
  })
}
scrollTo('block-1','ecology')
scrollTo('block-2','redBook')
scrollTo('block-3','goal')
scrollTo('block-4','statistic')
scrollTo('block-5','soil')
scrollTo('block-6','pollution-w')
scrollTo('block-7','greenhouseEf')
scrollTo('block-8','pollution-a')
scrollTo('block-9','desision')

// ----events--------------------------------------
factorItem.forEach((item,i) => {
  item.addEventListener('click', () => {
     toggleCard(i);
  });
});

menuBtn.addEventListener('click',toggleMenu);
closeBtn.addEventListener('click',toggleMenu);
// nav.addEventListener('click',(e) => {
//   openMenu(e);
// })
