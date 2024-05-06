const navLinks = document.querySelectorAll('.nav-link');
const listOfBooksPage = document.querySelector('#list-of-books-page');
const addNewBookPage = document.querySelector('#add-new-book-page');
const contactMePage = document.querySelector('#contact-me-page');
const listOfBooksContainer = document.querySelector('#list-of-books-container');
const addNewBookBtn = document.querySelector('#addBookBtn');
const bookTitleInput = document.querySelector('#bookTitleInput');
const bookAuthorInput = document.querySelector('#bookAuthorInput');
const addNewBookForm = document.querySelector('#add-a-new-book-form');
const successAlert = document.querySelector('#success-alert');
const errorAlert = document.querySelector('#error-alert');

export {
  navLinks, listOfBooksPage, addNewBookPage, contactMePage, listOfBooksContainer, addNewBookBtn,
  bookTitleInput, bookAuthorInput, addNewBookForm, successAlert, errorAlert,
};
