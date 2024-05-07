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
const dateYear = document.querySelector('#date-year');
const menuBtn = document.querySelector('#menu-btn');
const exitBtn = document.querySelector('#exit-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const formEditBtn = document.querySelector('#editBookBtn');
const editModalbookTitleInput = document.querySelector('#editModalbookTitleInput');
const editModalbookAuthorInput = document.querySelector('#editModalbookAuthorInput');

export {
  navLinks, listOfBooksPage, addNewBookPage, contactMePage, listOfBooksContainer, addNewBookBtn,
  bookTitleInput, bookAuthorInput, addNewBookForm, successAlert, errorAlert, dateYear, menuBtn,
  exitBtn, mobileMenu, formEditBtn, editModalbookTitleInput,
  editModalbookAuthorInput,
};
