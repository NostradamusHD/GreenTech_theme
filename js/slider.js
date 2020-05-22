var swiper = new Swiper('#article_slider', {
    navigation: {
        prevEl: '#slider_left',
        nextEl: '#slider_right',
    },
    breakpoints: {
        520:{
            slidesPerView: 2,
            spaceBetween: 50,
        },
        990:{
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
});
