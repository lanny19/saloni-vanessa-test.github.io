var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
      delay: 2500, // Change the delay time in milliseconds (e.g., 3000 for 3 seconds)
      disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  