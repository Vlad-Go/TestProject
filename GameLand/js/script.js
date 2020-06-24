class Select {
 constructor({wrappSelector ,selectSelector, optionSelector , optionListClass,defaultValue, button}) {
   this.wrappSelector  = wrappSelector
   this.selectSelector  = selectSelector
   this.optionSelector  = optionSelector
   this.optionListClass  = optionListClass
   this.button  = button
   this.defaultValue  = defaultValue
 }

 create(){
                         // WRAPP
       const selectWrapp = document.querySelector(this.wrappSelector );
                         // SELECT
       const select = document.querySelector(this.selectSelector);
                         // OPTIONS
       const options = select.querySelectorAll(this.optionSelector);


                         // SELECT CONTENT
       const selectContent = document.createElement('div');
          selectContent.classList.add('select-content');
          selectContent.innerHTML = this.defaultValue;
                         // SELECT BTN WRAPP
       const selectBtnWrapp = document.createElement('div');
         selectBtnWrapp.classList.add('select-btn-default');

                         // OPTIONS LIST
       const selectList = document.createElement('div');
             selectList.classList.add(this.optionListClass , 'hide');
             // selectList.style.display = "none";
         // ---------------------------------------------------------
               // FUNC
           const toggle = () => {

               const selectList = document.querySelector( `.${this.optionListClass}`);
                selectList.classList.remove(this.optionListClass);
                selectList.style.opacity = '0';
                selectList.classList.toggle("hide");


                setTimeout(()=>{
                   selectList.style.opacity = '1';
                   selectList.classList.add(this.optionListClass);
                },1)
                btn.classList.toggle("active");
               //   selectList.style.display = "block";
               // console.log(selectList.style.display);
               // if (selectList.style.display == "none") {
               //     selectList.style.display = "block";
               // }else {
               //   selectList.style.display = "none";
               // }
            }

           const selectOption = () => {
               const selectList = document.querySelector( `.${this.optionListClass}`);
               const selectContent = document.querySelector('.select-content');

                selectList.addEventListener('click',(e)=>{

                     if (e.target.closest( this.optionSelector)) {
                       selectContent.textContent = e.target.textContent;
                            render();
                            toggle();
                     }
                })
           }


           const render = () => {

             const selectList = document.querySelector( `.${this.optionListClass}`);
             const selectContent = document.querySelector('.select-content');
               selectList.textContent = " ";

               options.forEach(item => {
                 if (selectContent.textContent != item.textContent ) {
                     selectList.insertAdjacentHTML('beforeend',item.outerHTML) ;
                   }
               });

            }

         // --------------------------------------------------------
         select.textContent = "";
         selectBtnWrapp.innerHTML = this.button;
         select.append(selectContent);
         select.append(selectBtnWrapp);

         const btn = document.querySelector('.select-btn-default');

         selectWrapp.insertAdjacentHTML('beforeend' , `${selectList.outerHTML}`);
         render()

         btn.addEventListener("click" ,toggle);
         selectOption()

}
}






// --------------Slider

const slider = document.querySelector('.about__slider'),
      slides = slider.querySelectorAll('.about__slider-item'),
      slidesArr = Array.from(slides),

      //  Buttons
      nextBtn = document.querySelector('.slider-btn'),
      //  Dots
      dots = document.querySelector('.dots'),
      dotsArr = [];


let lineWidth = 30;
let currentSlide = 0;
let line;

line = document.createElement('div');
line.classList.add('line');
dots.append(line);

const sliderDotsGenerete =  ()=>{
  for (let i = 0; i < slidesArr.length; i++) {
    let newDot = document.createElement('div');
    newDot.classList.add('dot');
    dots.append(newDot);
    dotsArr.push(newDot)


  }

}

const sliderDots = (current = 0)=>{
  dotsArr.forEach((dot, i) => {
    dot.classList.remove('active') ;
    dot.addEventListener('click',(e)=>{
      dotEvent(e,i)
    })
  })

  dotsArr[current].classList.add("active");

}

const nextSlide = ()=>{


   slidesArr.forEach((slide, i) => {
     slidesArr.position = i ;
})


 let firsSlide = slidesArr.position = 0;
 let secondSlide = slidesArr.position = 1;
 let thirdSlide = slidesArr.position = 2;


      if (currentSlide === 2) {
          lineWidth =30
          line.style.width = lineWidth + 'px';
          sliderDots(currentSlide = 0);
      }else {
         lineWidth += 55;
        line.style.width =  lineWidth  +'px';
        sliderDots(currentSlide +=1);
      }

  slidesArr[firsSlide].classList.remove('first');
  slidesArr[firsSlide].classList.add('third') ;
  slidesArr[firsSlide].position = 2;



  slidesArr[secondSlide].classList.remove('second');
  slidesArr[secondSlide].classList.add('first') ;
  slidesArr[secondSlide].position = 0;

  slidesArr[thirdSlide].classList.remove('third');
  slidesArr[thirdSlide].classList.add('second') ;
  slidesArr[thirdSlide].position = 1;

  slidesArr.sort((a,b)=>{
    return a.position - b.position
  })
  // console.log(slidesArr);



}

// const dotEvent = (e,i) => {
//   const currentClass =   slidesArr[i].classList[1] ;
//   const first = slidesArr.find((item)=> item.classList.contains("first"));
//   console.log(first);
//   first.classList.remove('first') ;
//   first.classList.add(currentClass) ;
//
//   slidesArr[i].classList.remove('third') ;
//   slidesArr[i].classList.remove('second') ;
//   slidesArr[i].classList.add('first') ;
// }


nextBtn.addEventListener('click' , nextSlide);

sliderDotsGenerete()
sliderDots();



// --------------features
const
      features = document.querySelectorAll('.features__item'),
      featuresArr = Array.from(features),

      //  Dots
      dotsfeaturesArr = [];
      //  Line
      featuresLine = document.querySelector('.features__items-line');


const featuresDotsGenerete =  ()=>{

        for (let i = 0; i < featuresArr.length; i++) {
          let newDot = document.createElement('div');
          newDot.classList.add('dot' , 'features__item-dot' , 'active');

          featuresArr[i].append(newDot);
          dotsfeaturesArr.push(newDot);


        }

}

const featuresLineHeight = () => {

    featuresArr.splice(featuresArr.length - 1,1);

    const margin  = 27
    const timeForOneFade = 0.3;
    let height = featuresArr.reduce((accumulator,current)=>{
         return accumulator + current.clientHeight;
     },0);

      const animation = () => {
             // <=----------CONSTS---------------------=>
          const fullList =   document.querySelectorAll('.features__item');
          const windowHeight = window.innerHeight;
          const yToFeaturesLine = featuresLine.getBoundingClientRect().y;
          const animationHeight = 300;
          let fadeTime = timeForOneFade;
               // <=-------------------------------=>
              if ( windowHeight >= yToFeaturesLine  + animationHeight) {
                          // transition
                   featuresLine.style.transition = 'all '+  Math.round(timeForOneFade * featuresArr.length) + 's';
                            // height
                    featuresLine.style.height = height + margin * featuresArr.length  + 'px';
                    featuresLine.style.maxHeight = height + margin * featuresArr.length  + 'px';
                                     // fadeAnim
                  fullList.forEach((item,i) =>{
                            item.style.transition = 'all '+  (fadeTime += fadeTime) + 's';
                            item.style.opacity = '1'
                    });

                               // removeEvent
                  document.removeEventListener('scroll',animation);
              }
             // <=-------------------------------=>
      }
      document.addEventListener('scroll',animation);
}



featuresDotsGenerete()

setTimeout(featuresLineHeight,500)
// featuresLineHeight()
// --------------------------------------------------------
new Select({
  wrappSelector : ".header__nav-languages",
  selectSelector : '.header__nav-languages-select',
  optionSelector:'.option',
  optionListClass: 'select-list',
  button: '  <img class="header__nav-languages-img" src="img/drop-down.svg" alt="">',
  defaultValue: 'eng',
}).create()





// --------------------------------------menu
const menuBtn = document.querySelector('.menu__btn'),
      menu = document.querySelector('.header__menu');

   const toggleMenu = () => {
      menu.classList.toggle('show');
     setTimeout(()=>{
         menu.classList.toggle('active-menu');
     },1)

   }

menuBtn.addEventListener('click' , toggleMenu);
