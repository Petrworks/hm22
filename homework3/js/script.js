/* 1) Написати програму, яка тричі питає у користувача будь-яку інформацію і виводить її в консоль в одному рядку

Наприклад, для рядків "JavaScript', 'is my favorite', 'language', в консолі отримаємо
'JavaScriptis my favoritelanguage'*/

const infoFirst = prompt('Enter first string');
const infoSecond = prompt('Enter second string');
const infoThird = prompt('Enter third string');

console.log(`\`${infoFirst}${infoSecond}${infoThird}\``);

/*  
2) Напишіть програму, яка запитує у користувача кількість годин і переводить години в секунди. Отримані секунди вивести в модальне окно командою alert();  */

const hours = +prompt('Enter how  many hours');
const seconds = hours * 60 * 60;

alert(seconds);
