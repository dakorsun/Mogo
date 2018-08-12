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