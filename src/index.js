import currentYear from './modules/date.js';
import { openMenu, closeMenu } from './modules/menuToggler.js';
import router from './modules/router.js';
import addBook from './modules/addBook.js';
import renderBooks from './modules/renderBooks.js';

router();
currentYear();
openMenu();
closeMenu();
addBook();
renderBooks();
