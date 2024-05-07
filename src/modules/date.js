import { dateYear } from './globalComponents.js';

function currentYear() {
  const date = new Date();
  const year = date.getFullYear();
  dateYear.innerHTML = year;
}

export default currentYear;
