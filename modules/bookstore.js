const mainContainer = document.querySelector('main');
const navLinks = document.querySelectorAll('.nav-link');
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
      (bookItem) => Number(bookItem.id) !== Number(id)
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

// Exports
export { mainContainer, navLinks, BookStore };
