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
const faqItem = document.querySelectorAll('.faq__label');

if (faqItem && faqItem.length) {
  faqItem.forEach((e) => {
    e.addEventListener('click', feqHandler);
  });

  function allCloseFaq() {
    faqItem.forEach((item) => {
      console.log(item);

      parrent = item.parentElement;
      parrent.classList.remove('active');

      currentContent = item.nextElementSibling;
      item.classList.remove('active');
      currentContent.style.maxHeight = 0;
      currentContent.classList.remove('active');
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
    currentContent = e.currentTarget.nextElementSibling;
    parrent = currentContent.parentElement;
    e.currentTarget.classList.toggle('active');
    if (e.currentTarget.classList.contains('active')) {
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      currentContent.classList.add('active');
      parrent.classList.add('active');
    } else {
      currentContent.style.maxHeight = 0;
      currentContent.classList.remove('active');
      parrent.classList.remove('active');
    }
  }
}

// аккордеоны end
