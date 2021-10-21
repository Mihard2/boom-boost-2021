
const heightTopMenu = document.querySelector('.header-mobile').offsetHeight;
document.querySelector('.content-block').style.marginTop = `${heightTopMenu}px`;
document.querySelector('.header__support-fixed').style.top = `${heightTopMenu + 30}px`;
