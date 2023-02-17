/* Напишіть функцію, яка змінює фоновий колір тексту останнього параграфу в блоці <body>, а також функцію, яка змінює блоки footer и main місцями. */

const pElements = document.querySelectorAll('div p');

pElements[2].backgroundColor = 'green';

console.log(pElements);
