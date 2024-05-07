import { menuBtn, exitBtn, mobileMenu } from './globalComponents.js';

const openMenu = () => {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('d-none');
  });
};

const closeMenu = () => {
  exitBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('d-none');
  });
};

export { openMenu, closeMenu };
