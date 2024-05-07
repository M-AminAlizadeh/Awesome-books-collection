import BookStore from './bookstore.js';

const removeBook = () => {
  const bookstore = new BookStore();
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      bookstore.remove(e.target.id);
      bookstore.render();
    }
  });
};

export default removeBook;
