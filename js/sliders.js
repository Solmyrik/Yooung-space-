const masterSliderContainer = document.querySelector('.master__slider-1');

console.log(masterSliderContainer);
if (masterSliderContainer) {
  const masterSSlider = new Swiper('.master__slider-1', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    touchEventsTarget: 'container',
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: '.master-prev-1',
      nextEl: '.master-next-1',
    },
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      992: {
        spaceBetween: 40,
      },
    },
  });
}
const masterSliderContainer2 = document.querySelector('.master__slider-2');

console.log(masterSliderContainer2);
if (masterSliderContainer2) {
  const masterSSlider2 = new Swiper('.master__slider-2', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    touchEventsTarget: 'container',
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: '.master-prev-2',
      nextEl: '.master-next-2',
    },
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      992: {
        spaceBetween: 40,
      },
    },
  });
}

const receiveSliderContainer = document.querySelector('.master__slider-2');

if (receiveSliderContainer) {
  const receiveSSlider = new Swiper('.receive__slider', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    touchEventsTarget: 'container',
    mousewheel: {
      forceToAxis: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      992: {
        spaceBetween: 0,
      },
    },
  });
}

const reviewsliderContainer = document.querySelector('.reviews__slider');

if (reviewsliderContainer) {
  const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    initialSlide: 1,
    touchEventsTarget: 'container',
    mousewheel: {
      forceToAxis: true,
    },
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 16,
        slidesPerView: 'auto',
      },
      992: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
    },
    on: {
      slideChange: function () {
        // Удаляем класс со всех слайдов перед добавлением
        this.slides.forEach((slide) => {
          slide.classList.remove('swiper-slide-next-next');
        });

        // Определяем индексы для следующего слайда и второго следующего слайда
        const nextNextIndex = (this.activeIndex + 2) % this.slides.length;

        // Устанавливаем класс для второго следующего слайда
        this.slides[nextNextIndex].classList.add('swiper-slide-next-next');
      },
    },
  });
}
