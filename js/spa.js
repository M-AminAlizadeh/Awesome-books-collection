let addBtn;
const mainContainer = document.querySelector('main');
const navLinks = document.querySelectorAll('.nav-link');
let booksContainer = '';

class BookStore {
  constructor() {
    this.booksArray = [];
  }

  // Get data from localstorage
  getData() {
    this.booksArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  // Add book to booksArray
  addBook(title, author) {
    this.booksArray.push({
      id: Math.floor(Math.random() * 1000),
      title,
      author,
    });
  }

  // Remove book from booksArray
  remove(id) {
    this.booksArray = this.booksArray.filter(
      (bookItem) => Number(bookItem.id) !== Number(id),
    );
  }

  // Set data to localstorage
  saveData() {
    localStorage.setItem('books', JSON.stringify(this.booksArray));
  }

  // Show books in DOM
  render() {
    let content = '';
    this.booksArray.forEach((book) => {
      content += `
    <li class="w-100 mx-auto list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
      <h5>"${book.title}" by ${book.author}</h5>
      <button type="button" id="${book.id}" class="remove-btn border border-dark border-3 bg-danger text-light rounded">Remove</button>
    </li>`;
    });
    return content;
  }

  // Check if empty
  empty() {
    return this.booksArray.length === 0;
  }
}

const bookStore = new BookStore();

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

listOfBooks();

// REMOVE A BOOK
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
        <section class="d-flex flex-column justify-content-center align-items-center">
            <h2 class='text-center'>Contact Information</h2>
            <p>
                Do you have any questions od you just want to say "Hello"?<br>
                You can reach out to us!
            </p>
            <ul>
                <li>Our email: mail@mail.com</li>
                <li>Our phone number: 0042386534422</li>
                <li>Our address: street name 22, 84503, city, country</li>
            </ul>
        </section>
        `;
        break;
      default:
        listOfBooks();
        break;
    }
  });
});
