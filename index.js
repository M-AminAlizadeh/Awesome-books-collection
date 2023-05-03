import { listOfBooks } from './modules/addbook.js';
import { spa } from './modules/spa.js';
import { BookStore } from './modules/bookstore.js';
const bookStore = new BookStore();

// Add a book
listOfBooks;

// Remove a book
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    bookStore.remove(e.target.id);
    bookStore.saveData();
    console.log();
    document.querySelector('.books').innerHTML = bookStore.render();
    if (bookStore.empty()) {
      document.querySelector('.books').classList.remove('border');
    }
  }
});

// SPA nav
spa();
