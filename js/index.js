let swiper = new Swiper(".gallery-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".gallery-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper__btn-next',
    prevEl: '.swiper__btn-prev'
  },
  //Перевод на русский язык
  a11y: {
    paginationBulleMessage: 'Тут название слайда {{index}}',
  },
});