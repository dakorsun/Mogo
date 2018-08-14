let swiperTestimonial = new Swiper('.swiper-container-testimonial', {
    navigation: {
        nextEl: '.testimonial__arrow.next',
        prevEl: '.testimonial__arrow.prev',
    },
    spaceBetween: 300
})

let swiperQuote = new Swiper('.swiper-container-quote', {
    navigation: {
        nextEl: '.quote__arrow.next',
        prevEl: '.quote__arrow.prev',
    },
    spaceBetween: 300
})

console.log (swiperTestimonial.params);

class MobileNavMenu {
  constructor(props) {
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

    this.menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMenu();
    });

    this.menu.addEventListener('click', (e) => {
      this.toggleMenu();
    })
  }

  toggleMenu() {
    if (!this.menuButton.classList.contains('active')) {
      this.menu.classList.add('active');
      this.menuButton.classList.add('active');
    } else {
      this.menu.classList.remove('active');
      this.menuButton.classList.remove('active');
    }
  }
}

const menu = new MobileNavMenu({
  menuButton: '.header__burger',
  menu: '.header__refs'
});

let header = document.getElementById("header");
console.log(header);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 60) {
    header.classList.add('fixed');
  }else {
    header.classList.remove('fixed'); 
  }
})

class Accordion {
  constructor (props) {

    this.buttons = [].slice.call(document.querySelectorAll(props.button))

    this.buttons.forEach((item, i, arr) => {
      
      item.addEventListener('click', () => {
        item.parentNode.classList.add('active')

        for(let x in arr) {
          console.log('loop')
          console.log(arr[x])          
          if (arr[x] != item) {
            arr[x].parentNode.classList.remove('active');
          } 
        }
      })

    });

  }
}

let acc = new Accordion({
  button: '.service__info-column-block-header'
})
