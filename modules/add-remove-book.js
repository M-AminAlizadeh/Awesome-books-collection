import { mainContainer, BookStore } from './bookstore.js';
const bookStore = new BookStore();
let booksContainer = '';

const listOfBooks = () => {
  bookStore.getData();
  mainContainer.innerHTML = `
        <div>
            <h1 class="text-center">All Awesome Books</h1>
            <ul class="books w-50 mx-auto list-unstyled my-5 list-group border-3 border-dark"></ul>
        </div>`;
  booksContainer = document.querySelector('.books');
  booksContainer.innerHTML = bookStore.render();
};

const removeBook = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      bookStore.remove(e.target.id);
      bookStore.saveData();
      booksContainer.innerHTML = bookStore.render();
      if (bookStore.empty()) {
        booksContainer.classList.remove('border');
      }
    }
  });
};

export { listOfBooks, removeBook };
