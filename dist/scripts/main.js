'use strict';

var swiper1 = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.testimonial__arrow next',
        prevEl: '.testimonial__arrow prev'
    },
    spaceBetween: 100
});

console.log(swiper1.params);