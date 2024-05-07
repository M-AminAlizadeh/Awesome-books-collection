import BookStore from './bookstore.js';

const renderBooks = () => {
  const bookstore = new BookStore();
  bookstore.render();
};

export default renderBooks;
