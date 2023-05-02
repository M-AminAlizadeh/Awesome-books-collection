const booksContainer = document.querySelector('.books');
let booksArray = JSON.parse(localStorage.getItem('books')) || [];

// Display Books
function displayBooks() {
  let itemContent = '';
  booksArray.forEach((book) => {
    itemContent += `
    <li class="w-50 mx-auto">
      <div>
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <button type="button" id="${book.id}" class="remove-btn">Remove</button>
      </div>
      <hr>
    </li>`;
  });
  booksContainer.innerHTML = itemContent;

  // Remove Book
  const deleteBtns = document.querySelectorAll('.remove-btn');
  function removeBook(id) {
    booksArray = booksArray.filter((book) => book.id.toString() !== id);
    localStorage.setItem('books', JSON.stringify(booksArray));
    displayBooks();
  }
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (e) => {
      removeBook(e.target.id);
    });
  });
}

displayBooks();
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const addBtn = document.querySelector('#addBtn');

// Add Book
function addBooks(title, author) {
  const bookItem = {
    id: Math.floor(Math.random() * 1000),
    title: title.value,
    author: author.value,
  };
  booksArray.push(bookItem);
  localStorage.setItem('books', JSON.stringify(booksArray));
  displayBooks();
  document.getElementById('titleInput').value = '';
  document.getElementById('authorInput').value = '';
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBooks(titleInput, authorInput);
});
