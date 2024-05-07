import {
  listOfBooksContainer,
  editModalbookTitleInput,
  editModalbookAuthorInput,
  formEditBtn,
} from './globalComponents.js';

class BookStore {
  constructor() {
    this.books = [];
  }

  add(title, author) {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.books.push({
      id: Math.floor(Math.random() * 1000),
      title,
      author,
    });
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  remove(id) {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.books = this.books.filter(
      (book) => Number(book.id) !== Number(id),
    );
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  edit(id) {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.books.forEach((book) => {
      if (Number(book.id) === Number(id)) {
        editModalbookTitleInput.value = book.title;
        editModalbookAuthorInput.value = book.author;

        formEditBtn.addEventListener('click', (e) => {
          e.preventDefault();
          book.title = editModalbookTitleInput.value;
          book.author = editModalbookAuthorInput.value;

          localStorage.setItem('books', JSON.stringify(this.books));

          this.render();
        });
      }
    });
  }

  render() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    let content = '';
    listOfBooksContainer.innerHTML = content;
    if (this.books.length === 0) {
      listOfBooksContainer.innerHTML = '<tr><td colspan="5">No books added yet!</td></tr>';
    } else {
      this.books.forEach((book, index) => {
        content += `
            <tr id=${book.id}>
              <th scope="row">${index + 1}</th>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>
                <button id=${book.id} type="button" class="btn btn-warning edit-btn" data-bs-toggle="modal" data-bs-target="#edit-modal">
                  Edit
                </button>
                <button id=${book.id} type="button" class="btn bg-danger remove-btn">Remove</button>
              </td>
            </tr>`;
      });
      listOfBooksContainer.innerHTML = content;
    }
  }
}

export default BookStore;
