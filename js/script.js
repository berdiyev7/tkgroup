function testWebP(callback) {

   let webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

const defaultSelect = () => {
   const element = document.querySelector('.form__select');
   const choices = new Choices(element, {
      searchEnabled: false,
      searchChoices: false,

   });
};
defaultSelect();

const range = document.querySelector('.form__range');
const value = document.querySelector('.value');
value.textContent = range.value;
range.oninput = function () {
   value.textContent = this.value;
}



