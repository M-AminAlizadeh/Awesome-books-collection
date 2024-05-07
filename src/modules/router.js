import {
  navLinks, listOfBooksPage, addNewBookPage, contactMePage,
} from './globalComponents.js';

const router = () => {
  const pages = [listOfBooksPage, addNewBookPage, contactMePage];
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const { nodeName } = e.target;
      navLinks.forEach((navLink) => {
        if (nodeName !== 'H1') {
          navLink.classList.remove('text-primary');
        }
      });
      if (nodeName !== 'H1') {
        e.target.classList.add('text-primary');
      }

      pages.forEach((page) => {
        page.classList.add('d-none');
      });

      switch (e.target.id) {
        case 'brand-logo':
          pages.forEach((page) => {
            if (page.id === 'list-of-books-page') {
              page.classList.remove('d-none');
            }
          });
          break;
        case 'list':
          pages.forEach((page) => {
            if (page.id === 'list-of-books-page') {
              page.classList.remove('d-none');
            }
          });
          break;
        case 'add-new':
          pages.forEach((page) => {
            if (page.id === 'add-new-book-page') {
              page.classList.remove('d-none');
            }
          });
          break;
        case 'contact':
          pages.forEach((page) => {
            if (page.id === 'contact-me-page') {
              page.classList.remove('d-none');
            }
          });
          break;
        default:
      }
    });
  });
};

export default router;
