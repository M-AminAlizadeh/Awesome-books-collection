const date = new Date();
const dateYear = document.querySelector('#date-year');
const year = date.getFullYear();

function currentYear() {
  dateYear.innerHTML = year;
}

export default currentYear;
