import { timeContainer } from './globalComponents.js';

const time = () => {
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    timeContainer.innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};

export default time;
