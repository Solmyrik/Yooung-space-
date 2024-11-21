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

  const items = document.querySelectorAll('.reviews__slide');

  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (item.classList.contains('swiper-slide-next-next')) {
        return;
      }
      if (item.classList.contains('swiper-slide-next')) {
        return;
      }
      if (item.classList.contains('swiper-slide-active')) {
        return;
      }
      if (item.nextElementSibling.classList.contains('swiper-slide-active')) {
        reviewsSlider.slidePrev();
        return;
      }
      reviewsSlider.slideNext();
    });
  });
}

//слейдер на о нас
const personalSliderContainer1 = document.querySelector('.personal__block-1');

if (personalSliderContainer1) {
  const personalSlider1 = new Swiper('.personal__block-1', {
    slidesPerView: 4,
    spaceBetween: 40,
    initialSlide: 1,
    touchEventsTarget: 'container',
    mousewheel: {
      forceToAxis: true,
    },
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 40,
        slidesPerView: 'auto',
      },
      992: {
        spaceBetween: 40,
        slidesPerView: 4,
      },
    },
    on: {
      slideChange: function () {
        // Remove the class from all slides before adding new classes
        this.slides.forEach((slide) => {
          slide.classList.remove('swiper-slide-next-next');
          slide.classList.remove('swiper-slide-next-next-next'); // Remove the new class
        });

        // Calculate the indices for the next and the second next slides
        const nextIndex = (this.activeIndex + 1) % this.slides.length;
        const nextNextIndex = (this.activeIndex + 2) % this.slides.length;
        const nextNextNextIndex = (this.activeIndex + 3) % this.slides.length; // Index for the third next slide

        // Add classes for the next slides
        this.slides[nextNextIndex].classList.add('swiper-slide-next-next');
        this.slides[nextNextNextIndex].classList.add('swiper-slide-next-next-next'); // Add the new class
      },
    },
  });

  const items = document.querySelectorAll('.personal__slide_i');

  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log(item);
      if (item.classList.contains('swiper-slide-next-next')) {
        return;
      }
      if (item.classList.contains('swiper-slide-next-next-next')) {
        return;
      }
      if (item.classList.contains('swiper-slide-next')) {
        return;
      }
      if (item.classList.contains('swiper-slide-active')) {
        return;
      }
      if (
        item.nextElementSibling &&
        item.nextElementSibling.classList.contains('swiper-slide-active')
      ) {
        personalSlider1.slidePrev();
        return;
      }
      personalSlider1.slideNext();
    });
  });
}

const personalSliderContainer2 = document.querySelector('.personal__block-1');

if (personalSliderContainer2) {
  const personalSlider2 = new Swiper('.personal__block-2', {
    slidesPerView: 4,
    spaceBetween: 40,
    initialSlide: 1,
    touchEventsTarget: 'container',
    mousewheel: {
      forceToAxis: true,
    },
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 40,
        slidesPerView: 'auto',
      },
      992: {
        spaceBetween: 40,
        slidesPerView: 4,
      },
    },
    on: {
      slideChange: function () {
        // Remove the class from all slides before adding new classes
        this.slides.forEach((slide) => {
          slide.classList.remove('swiper-slide-next-next');
          slide.classList.remove('swiper-slide-next-next-next'); // Remove the new class
        });

        // Calculate the indices for the next and the second next slides
        const nextIndex = (this.activeIndex + 1) % this.slides.length;
        const nextNextIndex = (this.activeIndex + 2) % this.slides.length;
        const nextNextNextIndex = (this.activeIndex + 3) % this.slides.length; // Index for the third next slide

        // Add classes for the next slides
        this.slides[nextNextIndex].classList.add('swiper-slide-next-next');
        this.slides[nextNextNextIndex].classList.add('swiper-slide-next-next-next'); // Add the new class
      },
    },
  });

  const items = document.querySelectorAll('.personal__slide_a');

  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log(item);
      if (item.classList.contains('swiper-slide-next-next')) {
        return;
      }
      if (item.classList.contains('swiper-slide-next-next-next')) {
        return;
      }
      if (item.classList.contains('swiper-slide-next')) {
        return;
      }
      if (item.classList.contains('swiper-slide-active')) {
        return;
      }
      if (
        item.nextElementSibling &&
        item.nextElementSibling.classList.contains('swiper-slide-active')
      ) {
        personalSlider2.slidePrev();
        return;
      }
      personalSlider2.slideNext();
    });
  });
}
