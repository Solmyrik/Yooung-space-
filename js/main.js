const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__wrapper');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

// аккордеоны
const faqItem = document.querySelectorAll('.faq__item');

if (faqItem && faqItem.length) {
  faqItem.forEach((e) => {
    e.addEventListener('click', feqHandler);
  });

  function allCloseFaq() {
    faqItem.forEach((item) => {
      console.log(item);

      const parrent = item;
      parrent.classList.remove('active');

      const currentContent = item.querySelector('.faq__content');
      const currentLabel = item.querySelector('.faq__label');

      item.classList.remove('active');
      currentContent.style.maxHeight = 0;
      currentContent.classList.remove('active');

      currentLabel.classList.remove('active');
    });
  }

  function feqHandler(e) {
    e.preventDefault();
    const isActive = e.currentTarget.classList.contains('active');
    if (isActive) {
      allCloseFaq();
      return;
    }
    allCloseFaq();
    const currentContent = e.currentTarget.querySelector('.faq__content');
    const currentLabel = e.currentTarget.querySelector('.faq__label');

    parrent = e.currentTarget;

    console.log(e.currentTarget, 'current');
    console.log(currentLabel, 'currentLabel');

    currentLabel.classList.toggle('active');
    if (currentLabel.classList.contains('active')) {
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      currentContent.classList.add('active');
      parrent.classList.add('active');
    } else {
      currentContent.style.maxHeight = 0;
      currentContent.classList.remove('active');
      parrent.classList.remove('active');
      currentLabel.classList.remove('active');
    }
  }

  faqItem[0].click();
}

// аккордеоны end

// аккордеон мастер
const buttonsMaster = document.querySelectorAll('.master-classes__button');

function masterItemsHundler(e) {
  e.preventDefault();
  console.log(e.currentTarget);
  const parent = e.currentTarget.closest('.master-classes__article');
  const hidden = parent.querySelector('.master-classes__hidden');

  hidden.style.maxHeight = hidden.scrollHeight + 'px';
  hidden.classList.add('active');
  parent.classList.add('active');

  e.currentTarget.classList.add('active');
}

buttonsMaster.forEach((item) => {
  item.addEventListener('click', masterItemsHundler);
});
// аккордеон мастер end

//триггеры мастер класс
const triggersMaster = document.querySelectorAll('.master-classes__trigger');
const articlesMaster = document.querySelectorAll('.master-classes__articles');

triggersMaster.forEach((trigger, index) => {
  trigger.addEventListener('click', (e) => {
    triggersMaster.forEach((item) => {
      item.classList.remove('active');
    });
    articlesMaster.forEach((item) => {
      item.classList.remove('active');
    });

    trigger.classList.add('active');
    articlesMaster[index].classList.add('active');
  });
});
//триггеры мастер класс end

//cookie
const cookie = document.querySelector('.cookie');
const cookieBtn = document.querySelector('.cookie__buttons');
const valueCookie = localStorage.getItem('cookie');

if (!valueCookie) {
  cookie.classList.add('active');
}

if (cookieBtn) {
  cookieBtn.addEventListener('click', (e) => {
    console.log(e.target.className.includes('_btn-s'));
    if (e.target.className.includes('_btn-s')) {
      hiddenCookie();
    }
  });
}

const hiddenCookie = () => {
  cookie.classList.remove('active');
  localStorage.setItem('cookie', true);
};
//cookie end

// vanila-footer
const footer = document.querySelector('footer');
const sections = document.querySelectorAll('section');

const prevSection = sections[sections.length - 1];
if (prevSection && prevSection.className.includes('vanila-footer')) {
  footer.classList.add('vanila-footer');
}
// vanila-footer end

//anime
const animItems = document.querySelectorAll('._anim');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}
//anime end

//scroll trigger
const programWrapper = document.querySelector('.program__wrapper');

if (programWrapper) {
  // Массив цветов для переключения
  const colors = ['red', 'green', 'blue', 'red'];
  const sectionHeight = 100; // высота секции в vh (100vh)

  const triggers = document.querySelectorAll('.program__trigger');
  const articles = document.querySelectorAll('.program__article-pc');

  window.addEventListener('scroll', () => {
    const main = document.querySelector('.program');
    const rect = main.getBoundingClientRect(); // Получаем координаты main

    // Вычисляем процент прокрутки внутри main
    const scrollY = Math.abs(rect.top) + window.scrollY; // Текущая позиция прокрутки
    const windowHeight = window.innerHeight; // Высота окна просмотра
    const mainHeight = main.offsetHeight; // Высота main

    console.log(scrollY, 'scrollY');
    const myScroll = Math.abs(rect.top - window.innerHeight) / mainHeight;

    // Рассчитываем текущий процент прокрутки внутри main
    const scrollPercent = (scrollY / (mainHeight - windowHeight)) * 100;

    // Определяем текущий индекс цвета
    console.log(myScroll * 4, 'myScroll');
    const index = Math.floor(myScroll * 4);
    console.log(index, 'index');
    console.log(scrollPercent, 'scrollPercent');

    // Меняем цвет текста в зависимости от текущего индекса
    if (index < colors.length) {
      colors.forEach((color) => {
        main.classList.remove(color);
      });

      resetTriggers();

      triggers[index].classList.add('active');
      articles[index].classList.add('active');
      main.classList.add(colors[index]);
    }

    function resetTriggers() {
      triggers.forEach((item) => {
        item.classList.remove('active');
      });
      articles.forEach((item) => {
        item.classList.remove('active');
      });
    }
  });
}

//scroll trigger end

//
const reviesItems = document.querySelectorAll('.review__item');

if (reviesItems && reviesItems.length) {
  const button = document.querySelector('.review__button');

  button.addEventListener('click', (e) => {
    reviesItems.forEach((item) => {
      item.classList.remove('hidden');
    });
    button.style.display = 'none';
  });
}

// аккордеоны мастер класс
const masterItems = document.querySelectorAll('.mobile-program__item');

if (masterItems && masterItems.length) {
  masterItems.forEach((e) => {
    e.addEventListener('click', feqHandler);
  });

  function allCloseFaq() {
    masterItems.forEach((item) => {
      console.log(item);

      const parrent = item;
      parrent.classList.remove('active');

      const currentContent = item.querySelector('.mobile-program__content');
      const currentLabel = item.querySelector('.mobile-program__label');

      item.classList.remove('active');
      currentContent.style.maxHeight = 0;
      currentContent.classList.remove('active');

      currentLabel.classList.remove('active');
    });
  }

  function feqHandler(e) {
    e.preventDefault();
    const isActive = e.currentTarget.classList.contains('active');
    if (isActive) {
      allCloseFaq();
      return;
    }
    allCloseFaq();
    const currentContent = e.currentTarget.querySelector('.mobile-program__content');
    const currentLabel = e.currentTarget.querySelector('.mobile-program__label');

    parrent = e.currentTarget;

    console.log(e.currentTarget, 'current');
    console.log(currentLabel, 'currentLabel');

    currentLabel.classList.toggle('active');
    if (currentLabel.classList.contains('active')) {
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      currentContent.classList.add('active');
      parrent.classList.add('active');
    } else {
      currentContent.style.maxHeight = 0;
      currentContent.classList.remove('active');
      parrent.classList.remove('active');
      currentLabel.classList.remove('active');
    }
  }
}

// аккордеоны end
