$('.achivement__slider-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  dots:true,
  prevArrow: `  <button class="slider-btn prev-btn" type="button" name="button">
      <img class="" src="img/arrow-left.svg" alt="" >
    </button>`,
  nextArrow: `  <button class="slider-btn next-btn " type="button" name="button">
       <img  class="next-btn"src="img/arrow-right.svg" alt="" class="slider-btn">
    </button>`,

});

 new WOW().init();

const menuBtn = document.querySelector('.header__menu-btn-wrapp'),
       headerMenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click',()=>{
  headerMenu.classList.toggle('mobile-menu')
})
