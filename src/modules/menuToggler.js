const menuBtn = document.querySelector('#menu-btn');
const exitBtn = document.querySelector('#exit-btn');
const mobileMenu = document.querySelector('#mobile-menu');

const openMenu = () => {
  menuBtn.addEventListener('click', () => {
    // open menu
    mobileMenu.classList.toggle('d-none');
  });
};

const closeMenu = () => {
  exitBtn.addEventListener('click', () => {
    // close menu
    mobileMenu.classList.toggle('d-none');
  });
};

export { openMenu, closeMenu };
