import {
  bookTitleInput, bookAuthorInput,
  addNewBookBtn, successAlert, errorAlert,
} from './globalComponents.js';
import BookStore from './bookstore.js';

const addBook = () => {
  const bookstore = new BookStore();
  addNewBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const bookTitleInputValue = bookTitleInput.value;
    const bookAuthorInputValue = bookAuthorInput.value;

    // Form control for all scenarios
    if (bookTitleInputValue && bookAuthorInputValue) {
      bookstore.add(bookTitleInputValue, bookAuthorInputValue);

      bookTitleInput.value = '';
      bookAuthorInput.value = '';

      successAlert.classList.remove('d-none');
      errorAlert.classList.add('d-none');
    } else if (!bookTitleInputValue && bookAuthorInputValue) {
      successAlert.classList.add('d-none');
      errorAlert.classList.remove('d-none');
      errorAlert.innerHTML = 'Please fill the title!';
    } else if (bookTitleInputValue && !bookAuthorInputValue) {
      successAlert.classList.add('d-none');
      errorAlert.classList.remove('d-none');
      errorAlert.innerHTML = 'Please fill the author!';
    } else {
      successAlert.classList.add('d-none');
      errorAlert.classList.remove('d-none');
      errorAlert.innerHTML = 'Please fill the both title and author!';
    }

    bookstore.render();
  });
};

export default addBook;
