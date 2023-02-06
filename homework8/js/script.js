/* 1) Напишіть функцію parseDate(), яка показує поточну дату і час чітко в заданому форматі.

для дати (Thu Jan 06 2022 22:03:07) - new Date(2022, 0, 6, 22, 3, 7) 
Today is: Thursday.
Current time is: 10 PM : 03 : 07 */

function parseDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const min = date.getMinutes();
  const second = date.getSeconds();
  let options = { weekday: 'long', hour: '2-digit' };

  return `Today is: ${new Intl.DateTimeFormat('en-US', options).format(date)}.
  Current time is: ${new Intl.DateTimeFormat('en-Us', options).format(
    date
  )} : ${'0' + min} : ${'0' + second}
  `;
}

const dateOf = new Date(2022, 0, 6, 22, 3, 7);
console.log(parseDate(dateOf));

// function log(a, b, c, d, e, f) {
//   console.log(a + b);
// }

// log(5, 4);
// log(5, 7);
