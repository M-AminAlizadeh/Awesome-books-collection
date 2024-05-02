import { mainContainer, navLinks, BookStore } from './bookstore.js';
import { listOfBooks } from './add-remove-book.js';

const bookStore = new BookStore();
let addBtn;

const spa = () => {
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
      navLinks.forEach((navLink) => {
        navLink.classList.remove('text-primary');
      });
      e.target.classList.add('text-primary');
      mainContainer.innerHTML = '';
      switch (e.target.id) {
        case 'list':
          listOfBooks();
          break;
        case 'add-new':
          mainContainer.innerHTML = `
          <h2 class='text-center'>Add a new book</h2>
          <form action='' class='d-flex flex-column w-50 mx-auto gap-4 mt-4'>
            <input
              type='text'
              class='form-control'
              id='titleInput'
              placeholder='Title'
              required
            />
            <input
              type='text'
              class='form-control'
              id='authorInput'
              placeholder='Author'
              required
            />
            <button
              type='submit'
              id='addBtn'
              class='btn btn-primary w-25 align-self-end'>
              Add
            </button>
          </form>
          `;
          // ADD A NEW BOOK
          addBtn = document.querySelector('#addBtn');
          addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const titleInput = document.querySelector('#titleInput');
            const authorInput = document.querySelector('#authorInput');
            const titleValue = titleInput.value;
            const authorValue = authorInput.value;
            titleInput.className = '';
            authorInput.className = '';

            if (titleValue === '' && authorValue === '') {
              titleInput.className = 'border border-2 border-danger';
              authorInput.className = 'border border-2 border-danger';
              return;
            }
            if (authorValue === '') {
              authorInput.className = 'border border-2 border-danger';
              return;
            }
            if (titleValue === '') {
              titleInput.className = 'border border-2 border-danger';
              return;
            }
            bookStore.addBook(titleInput.value, authorInput.value);
            bookStore.saveData();
            titleInput.value = '';
            authorInput.value = '';
          });
          break;
        case 'contact':
          mainContainer.innerHTML = `
          <section class="border d-flex flex-column justify-content-center align-items-center">
              <h2 class='text-center'>Contact Information</h2>
              <p>
                  Do you have any questions or do you just want to say "Hello"?<br>
                  You can reach out to me!
                  <a href="https://www.linkedin.com/in/m-amin-alizadeh">LinkedIn</a>
              </p>
          </section>
          `;
          break;
        default:
          listOfBooks();
          break;
      }
    });
  });
};

export default spa;
