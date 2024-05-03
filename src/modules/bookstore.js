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
    this.books = this.books.filter(
      (bookItem) => Number(bookItem.id) !== Number(id),
    );
  }

  // Show books in DOM
  render() {
    let content = '';
    if (this.books.length === 0) {
      return '<p class="border fw-bold">No book added yet!</p>';
    }
    this.books.forEach((book) => {
      content += `
    <li class="w-100 mx-auto list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
      <h5>"${book.title}" by ${book.author}</h5>
      <button type="button" id="${book.id}" class="remove-btn border border-dark border-3 bg-danger text-light rounded">Remove</button>
    </li>`;
    });
    return content;
  }
}

export default BookStore;
