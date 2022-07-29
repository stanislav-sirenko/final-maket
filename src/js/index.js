import '../scss/style.scss';

const sliders = document.querySelectorAll('.swiper');
let mySwiper;

let brands = document.querySelector('.technique-brands');
let brandsCards = brands.querySelectorAll('.card');
let brandsBtnMore = brands.querySelector('.btn-more');
let brandsRotate = brands.querySelector('.read-more-img');

let types = document.querySelector('.technique-types');
let typesCards = types.querySelectorAll('.card');
let typesBtnMore = types.querySelector('.btn-more');
let typesRotate = types.querySelector('.read-more-img');

let text = document.querySelector('.text-container');
let textContent = text.querySelectorAll('.text-content');
let textBtnMore = text.querySelector('.btn-more-1');
let textRotate = text.querySelector('.read-more-img');


let burgerBtn = document.querySelector('.burger');
let closeBtn = document.querySelector('.button-close')
let sidebarActive = document.querySelector('.sidebar__menu');
let mainActive = document.querySelector('.main-content');

let formAction = document.querySelector('.modal-call');
let formBtn = document.querySelectorAll('.call');
let formClose = document.querySelector('.modal-call__btn');

let title = document.querySelector('.modal-call__title');
let chatBtn = document.querySelectorAll('.chat');
let chatBlock = document.querySelectorAll('.modal-chat__form-item');

const HIDE = 'Скрыть';
const SHOW_ALL = 'Показать все';
const READ_ALL = 'Читать далее';
const FEEDBACK = 'Обратная связь';
const REQUEST_CALL = 'Заказать звонок';


// ------ КНОПКА "ПОКАЗАТЬ ВСЕ" И "ЧИТАТЬ ДАЛЕЕ"

function addBtnMoreEventListener(cardsNodes, btnNode, rotateImg) {
  btnNode.addEventListener('click', function () {
    for (let i = 0; i < cardsNodes.length; i++) {
      cardsNodes[i].classList.toggle("hide-element");
      if (cardsNodes[i].classList.contains("hide-element")) {
        btnNode.value = SHOW_ALL && READ_ALL;
      } else {
        btnNode.value = HIDE;
      }
    }

    if (btnNode.value === HIDE) {
      rotateImg.style.transform = 'rotate(' + 180 + 'deg)';
    } else {
      rotateImg.style.transform = null;
    }
  })
}


// ------ SIDEBAR ------

  function addBtnSidebarActive (btnActive) {
    btnActive.addEventListener('click', function () {
      sidebarActive.classList.toggle('sidebar-active');
      mainActive.classList.toggle('main-active');
    });
  }


// ------ FORM ACTIVE ------

function addBtnFormActive (btnFormActive, valueForm, valueDisplay) {
  for (let i = 0; i < btnFormActive.length; i++) {
    btnFormActive[i].addEventListener('click', function () {
      formAction.classList.toggle('form-active');
      mainActive.classList.toggle('main-content__active');
      sidebarActive.classList.toggle('sidebar-form__active');
      title.innerHTML = valueForm;
      for (let q = 0; q < chatBlock.length; q++) {
        chatBlock[q].style.display = valueDisplay;
      }
    });
  }
}


// ------ FORM CLOSE ------

formClose.addEventListener('click', function () {
  formAction.classList.toggle('form-active');
  mainActive.classList.toggle('main-content__active');
  sidebarActive.classList.toggle('sidebar-form__active');
});


// ------ SWIPER ------

window.onload = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    sliders.forEach((el) => {
      mySwiper = new Swiper(el, {
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true,
          },
          slidesPerView: "auto",
      });
    });
  }
}

addBtnMoreEventListener(brandsCards, brandsBtnMore, brandsRotate)
addBtnMoreEventListener(typesCards, typesBtnMore, typesRotate)
addBtnMoreEventListener(textContent, textBtnMore, textRotate)
addBtnSidebarActive(burgerBtn)
addBtnSidebarActive(closeBtn)
addBtnFormActive(formBtn, REQUEST_CALL, 'none')
addBtnFormActive(chatBtn, FEEDBACK, 'block')