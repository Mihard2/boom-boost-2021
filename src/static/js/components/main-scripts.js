
const heightTopMenu = document.querySelector('.header-mobile').offsetHeight;
document.querySelector('.content-block').style.marginTop = `${heightTopMenu}px`;
document.querySelector('.header__support-fixed').style.top = `${heightTopMenu + 30}px`;

const openMenu = document.querySelector('.menu-link__open');
const closeMenu = document.querySelector('.menu-link__close');
const menu = document.querySelector('.sidebar-block');

openMenu.addEventListener('click', () => {
    menu.animate({
        right: '0%'
    }, {
        duration: 1000,
        fill: 'forwards',
    });
});

closeMenu.addEventListener('click', () => {
    menu.animate({
        right: '100%'
    }, {
        duration: 1000,
        fill: 'forwards',
    });
});
