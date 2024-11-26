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
