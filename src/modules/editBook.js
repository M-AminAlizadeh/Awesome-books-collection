import BookStore from './bookstore.js';

const editBook = () => {
  const bookstore = new BookStore();
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
      bookstore.edit(e.target.id);
    }
  });
};

export default editBook;
