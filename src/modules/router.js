import { mainContainer, navLinks } from './globalComponents.js';
import bookListPage from './pages/bookListPage.js';
import addNewBookPage from './pages/addNewBookPage.js';
import contactMePage from './pages/contactMePage.js';
// import BookStore from './bookstore.js';
// import { renderBooks } from './add-remove-book.js';

// const bookStore = new BookStore();
// let addBtn;

// const spa = () => {
//   navLinks.forEach((navLink) => {
//     navLink.addEventListener('click', (e) => {
//       mainContainer.innerHTML = '';
//       switch (e.target.id) {
//         case 'list':
//           renderBooks();
//           break;
//         case 'add-new':
//           mainContainer.innerHTML = `
//           <h2 class='text-center'>Add a new book</h2>
//           <form action='' class='d-flex flex-column w-50 mx-auto gap-4 mt-4'>
//             <input
//               type='text'
//               class='form-control'
//               id='titleInput'
//               placeholder='Title'
//               required
//             />
//             <input
//               type='text'
//               class='form-control'
//               id='authorInput'
//               placeholder='Author'
//               required
//             />
//             <button
//               type='submit'
//               id='addBtn'
//               class='btn btn-primary w-25 align-self-end'>
//               Add
//             </button>
//           </form>
//           `;
//           // ADD A NEW BOOK
//           addBtn = document.querySelector('#addBtn');
//           addBtn.addEventListener('click', (e) => {
//             e.preventDefault();
//             const titleInput = document.querySelector('#titleInput');
//             const authorInput = document.querySelector('#authorInput');
//             const titleValue = titleInput.value;
//             const authorValue = authorInput.value;
//             titleInput.className = '';
//             authorInput.className = '';
//             // Error handling
//             if (titleValue === '' && authorValue === '') {
//               titleInput.className = 'border border-2 border-danger';
//               authorInput.className = 'border border-2 border-danger';
//               return;
//             }
//             if (authorValue === '') {
//               authorInput.className = 'border border-2 border-danger';
//               return;
//             }
//             if (titleValue === '') {
//               titleInput.className = 'border border-2 border-danger';
//               return;
//             }
//             bookStore.add(titleInput.value, authorInput.value);
//             titleInput.value = '';
//             authorInput.value = '';
//           });
//           break;
//       }
//     });
//   });
// };

const router = () => {
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      navLinks.forEach((navLink) => {
        navLink.classList.remove('text-primary');
      });
      e.target.classList.add('text-primary');

      switch (e.target.id) {
        case 'brand-logo':
          mainContainer.innerHTML = bookListPage();
          break;
        case 'list':
          mainContainer.innerHTML = bookListPage();
          break;
        case 'add-new':
          mainContainer.innerHTML = addNewBookPage();
          break;
        case 'contact':
          mainContainer.innerHTML = contactMePage();
          break;
        default:
      }
    });
  });
};

export default router;
