var navMenu = document.querySelector('.page-header__content-menu');
var navHeader = document.querySelector('.page-header');
var navHeaderWrapper = document.querySelector('.page-header__wrapper');
var navToggle = document.querySelector('.page-header__toggle');
var navScroll = document.querySelector('.page-header__menu-header');
var navLogoMenu = document.querySelector('.page-header__logo-first');
var navLogoScroll = document.querySelector('.page-header__logo-scroll');
var navListMenu = document.querySelector('.main-nav__list');
var navListMenuItem = document.querySelectorAll('.site-list__item');
var flag = false;

try {
  var openModal = document.querySelector('.set-profile__business-price');
  var closeModal = document.querySelector('.modal-price__close');
  var modal = document.querySelector('.modal-price');
} catch (err) {
}

navMenu.classList.add('page-header__content-menu--closed');
navToggle.classList.remove('page-header__toggle--nojs');

navToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (navMenu.classList.contains('page-header__content-menu--closed')) {
    navMenu.classList.remove('page-header__content-menu--closed');
    navToggle.classList.remove('page-header__toggle--closed');
    navLogoScroll.classList.remove('none-active');
    navMenu.classList.add('page-header__content-menu--opened');
    navToggle.classList.add('page-header__toggle--opened');
    navLogoMenu.classList.add('none-active');
    navScroll.classList.add('page-header__scroll');
  } else if ((navMenu.classList.contains('page-header__content-menu--opened') && flag) ||
    (navMenu.classList.contains('page-header__content-menu--closed') && flag)) {
    navMenu.classList.remove('page-header__content-menu--opened');
    navToggle.classList.remove('page-header__toggle--opened');
    navMenu.classList.add('page-header__content-menu--closed');
    navToggle.classList.add('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle-scrolled--closed');
  } else {
    navMenu.classList.remove('page-header__content-menu--opened');
    navToggle.classList.remove('page-header__toggle--opened');
    navLogoMenu.classList.remove('none-active');
    navScroll.classList.remove('page-header__scroll');
    navMenu.classList.add('page-header__content-menu--closed');
    navToggle.classList.add('page-header__toggle--closed');
    navLogoScroll.classList.add('none-active');
  }
});

window.addEventListener('scroll', function (evt) {
  evt.preventDefault();
  var scrollPosition = window.pageYOffset;
  var size = {
    width: window.innerWidth || document.body.clientWidth
  };

  if (scrollPosition >= 630 && size.width >= 1200) {
    flag = true;
    if (!navScroll.classList.contains('page-header__scroll')) {
      navLogoScroll.classList.remove('none-active');
      navLogoMenu.classList.add('none-active');
      navScroll.classList.add('page-header__scroll');
      navToggle.classList.add('page-header__toggle-scrolled--closed');
      navMenu.classList.add('page-header__scroll');
      navListMenu.classList.add('main-nav__list-scroll');
      navListMenuItem.forEach(function (element) {
        element.classList.add('site-list__item--scroll');
      });
      navHeaderWrapper.classList.add('page-header__scroll-wrapper');
      navHeader.classList.add('page-header__fixed');
    }
  } else if (scrollPosition < 630 && size.width >= 1200) {
    flag = true;
    navLogoMenu.classList.remove('none-active');
    navLogoScroll.classList.add('none-active');
    navScroll.classList.remove('page-header__scroll');
    navMenu.classList.remove('page-header__scroll');
    navListMenu.classList.remove('main-nav__list-scroll');
    navListMenuItem.forEach(function (element) {
      element.classList.remove('site-list__item--scroll');
    });
    navHeaderWrapper.classList.remove('page-header__scroll-wrapper');
    navHeader.classList.remove('page-header__fixed');
  } else if (scrollPosition > 0 && size.width < 1200) {
    flag = true;
    if (!navScroll.classList.contains('page-header__scroll')) {
      navLogoScroll.classList.remove('none-active');
      navLogoMenu.classList.add('none-active');
      navScroll.classList.add('page-header__scroll');
      navToggle.classList.add('page-header__toggle-scrolled--closed');
    }
  } else if (scrollPosition === 0 && navToggle.classList.contains('page-header__toggle--opened')) {
    flag = false;
    if (!navScroll.classList.contains('page-header__scroll')) {
      navLogoScroll.classList.remove('none-active');
      navLogoMenu.classList.add('none-active');
      navScroll.classList.add('page-header__scroll');
    }
  } else {
    flag = false;
    navLogoMenu.classList.remove('none-active');
    navScroll.classList.remove('page-header__scroll');
    navLogoScroll.classList.add('none-active');
  }
});

try {
  openModal.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(modal.classList.contains('modal-price__disable')) {
      modal.classList.remove('modal-price__disable');
    }
  });
} catch (err) {
}

try {
  closeModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal-price__disable');
  });
} catch (err) {
}


