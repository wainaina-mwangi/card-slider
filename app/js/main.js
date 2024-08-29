const swiper = new Swiper('.slider-wrapper', {
  
    loop: true,
    grabCursor:true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // BREAKPOINTS LIKE IN CSS MEDIA QUERIES
    breakpoints:{
     0:{
        slidesPerView :1
     },
     720:{
        slidesPerView :2
     },
     1024:{
        slidesPerView :3
     }
    }
  });