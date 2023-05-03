import { listOfBooks, removeBook } from './modules/add-remove-book.js';
import { spa } from './modules/spa.js';
import { timeContainer,DateTime } from "./modules/luxon.js";

// Add a book
listOfBooks;

// Remove a book
removeBook();

// SPA nav
spa();

// Luxon
timeContainer.innerHTML = DateTime.now();