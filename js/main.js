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
