import currentYear from './modules/date.js';
import { openMenu, closeMenu } from './modules/menuToggler.js';
import router from './modules/router.js';
import addBook from './modules/addBook.js';
import renderBooks from './modules/renderBooks.js';
import removeBook from './modules/removeBook.js';
import editBook from './modules/editBook.js';

router();
currentYear();
openMenu();
closeMenu();
addBook();
renderBooks();
removeBook();
editBook();
