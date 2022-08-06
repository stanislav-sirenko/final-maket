import '../scss/style.scss'

const sliders = document.querySelectorAll('.swiper')
let mySwiper

const brands = document.querySelector('.technique-brands')
const brandsCards = brands.querySelectorAll('.card')
const brandsBtnMore = brands.querySelector('.btn-more')
const brandsRotate = brands.querySelector('.read-more-img')

const types = document.querySelector('.technique-types')
const typesCards = types.querySelectorAll('.card')
const typesBtnMore = types.querySelector('.btn-more')
const typesRotate = types.querySelector('.read-more-img')

const text = document.querySelector('.text-container')
const textContent = text.querySelectorAll('.text-content')
const textBtnMore = text.querySelector('.btn-more-1')
const textRotate = text.querySelector('.read-more-img')

const burgerBtn = document.querySelector('.burger')
const closeBtn = document.querySelector('.button-close')
const sidebarActive = document.querySelector('.sidebar__menu')
const mainActive = document.querySelector('.main-content')

const formAction = document.querySelector('.modal-call')
const formBtn = document.querySelectorAll('.call')
const formClose = document.querySelector('.modal-call__btn')

const title = document.querySelector('.modal-call__title')
const chatBtn = document.querySelectorAll('.chat')
const chatBlock = document.querySelectorAll('.modal-chat__form-item')

const mainForm = document.forms.form__call
const mainFormPhone = mainForm.phone
const mainFormChat = mainForm.name

const HIDE = 'Скрыть'
const SHOW_ALL = 'Показать все'
const READ_ALL = 'Читать далее'
const FEEDBACK = 'Обратная связь'
const REQUEST_CALL = 'Заказать звонок'

// ------ КНОПКА "ПОКАЗАТЬ ВСЕ" И "ЧИТАТЬ ДАЛЕЕ"

function addBtnMoreEventListener(cardsNodes, btnNode, rotateImg) {
  btnNode.addEventListener('click', function () {
    for (let i = 0; i < cardsNodes.length; i++) {
      cardsNodes[i].classList.toggle('hide-element')
      if (cardsNodes[i].classList.contains('hide-element')) {
        btnNode.value = SHOW_ALL && READ_ALL
      } else {
        btnNode.value = HIDE
      }
    }

    if (btnNode.value === HIDE) {
      rotateImg.style.transform = 'rotate(' + 180 + 'deg)'
    } else {
      rotateImg.style.transform = null
    }
  })
}

// ------ SIDEBAR ------

function addBtnSidebarActive(btnActive) {
  btnActive.addEventListener('click', function () {
    sidebarActive.classList.toggle('sidebar-active')
    mainActive.classList.toggle('main-active')
  })
}

// ------ FORM ACTIVE ------

function addBtnFormActive(btnFormActive, valueForm, valueDisplay) {
  for (let i = 0; i < btnFormActive.length; i++) {
    btnFormActive[i].addEventListener('click', function () {
      formAction.classList.toggle('form-active')
      mainActive.classList.toggle('main-content__active')
      sidebarActive.classList.toggle('sidebar-form__active')
      title.innerHTML = valueForm
      for (let q = 0; q < chatBlock.length; q++) {
        chatBlock[q].style.display = valueDisplay
      }
    })
  }
}

// ------ FORM CLOSE ------

formClose.addEventListener('click', function () {
  formAction.classList.toggle('form-active')
  mainActive.classList.toggle('main-content__active')
  sidebarActive.classList.toggle('sidebar-form__active')
})

// ------ AUTOFOCUS ------

function addBtnAutoFocus(focusBtn, mainFormInput) {
  for (let i = 0; i < focusBtn.length; i++) {
    focusBtn[i].addEventListener('click', function () {
      mainFormInput.focus()
    })
  }
}

// ------ SWIPER ------

window.onload = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    sliders.forEach((el) => {
      mySwiper = new Swiper(el, {
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true
        },
        slidesPerView: 'auto'
      })
    })
  }
}

addBtnMoreEventListener(brandsCards, brandsBtnMore, brandsRotate)
addBtnMoreEventListener(typesCards, typesBtnMore, typesRotate)
addBtnMoreEventListener(textContent, textBtnMore, textRotate)
addBtnSidebarActive(burgerBtn)
addBtnSidebarActive(closeBtn)
addBtnFormActive(formBtn, REQUEST_CALL, 'none')
addBtnFormActive(chatBtn, FEEDBACK, 'block')
addBtnAutoFocus(formBtn, mainFormPhone)
addBtnAutoFocus(chatBtn, mainFormChat)
