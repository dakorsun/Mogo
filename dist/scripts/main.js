'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var swiperTestimonial = new Swiper('.swiper-container-testimonial', {
  navigation: {
    nextEl: '.testimonial__arrow.next',
    prevEl: '.testimonial__arrow.prev'
  },
  spaceBetween: 300
});

var swiperQuote = new Swiper('.swiper-container-quote', {
  navigation: {
    nextEl: '.quote__arrow.next',
    prevEl: '.quote__arrow.prev'
  },
  spaceBetween: 300
});

console.log(swiperTestimonial.params);

var MobileNavMenu = function () {
  function MobileNavMenu(props) {
    var _this = this;

    _classCallCheck(this, MobileNavMenu);

    if (typeof props.menu === 'string') {
      this.menu = document.querySelector(props.menu);
    } else if (props.menu.nodeType) {
      this.menu = props.menu;
    }
    if (typeof props.menuButton === 'string') {
      this.menuButton = document.querySelector(props.menuButton);
    } else if (props.menuButton.nodeType) {
      this.menuButton = props.menuButton;
    }

    this.menuButton.addEventListener('click', function (e) {
      e.stopPropagation();
      _this.toggleMenu();
    });

    this.menu.addEventListener('click', function (e) {
      _this.toggleMenu();
    });
  }

  _createClass(MobileNavMenu, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      if (!this.menuButton.classList.contains('active')) {
        this.menu.classList.add('active');
        this.menuButton.classList.add('active');
      } else {
        this.menu.classList.remove('active');
        this.menuButton.classList.remove('active');
      }
    }
  }]);

  return MobileNavMenu;
}();

var menu = new MobileNavMenu({
  menuButton: '.header__burger',
  menu: '.header__refs'
});

var header = document.getElementById("header");
console.log(header);

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 60) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

var Accordion = function Accordion(props) {
  _classCallCheck(this, Accordion);

  this.buttons = [].slice.call(document.querySelectorAll(props.button));

  this.buttons.forEach(function (item, i, arr) {

    item.addEventListener('click', function () {
      item.parentNode.classList.add('active');

      for (var x in arr) {
        console.log('loop');
        console.log(arr[x]);
        if (arr[x] != item) {
          arr[x].parentNode.classList.remove('active');
        }
      }
    });
  });
};

var acc = new Accordion({
  button: '.service__info-column-block-header'
});