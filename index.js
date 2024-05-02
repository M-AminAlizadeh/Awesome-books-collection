import { listOfBooks, removeBook } from './modules/add-remove-book.js';
import spa from './modules/spa.js';
import currentYear from './modules/date.js';
import { openMenu, closeMenu } from './modules/menuToggler.js';

spa();
listOfBooks();
removeBook();
currentYear();
openMenu();
closeMenu();
