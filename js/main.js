const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__wrapper');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}
