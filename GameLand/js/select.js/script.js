export class Select {
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




new Select({
  wrappSelector : ".select__wrapp",
  selectSelector : '.select',
  optionSelector:'.option',
  optionListClass: 'select-list',
  button: '<button class="btn" type="button" name="button">^</button>',
  defaultValue: '1',
}).create()
