import { listOfBooksContainer } from './globalComponents.js';

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
                <button type="button" class="btn bg-warning">Edit</button>
                <button type="button" class="btn bg-danger remove-btn" id=${book.id}>Remove</button>
              </td>
            </tr>`;
      });
      listOfBooksContainer.innerHTML = content;
    }
  }
}

export default BookStore;
