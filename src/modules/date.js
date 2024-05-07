import { dateYear, dateContainer } from './globalComponents.js';

function date() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()].slice(0, 3);
  dateYear.innerHTML = year;
  dateContainer.innerHTML = `${year} / ${month} / ${day} (${dayOfWeek})`;
}

export default date;
