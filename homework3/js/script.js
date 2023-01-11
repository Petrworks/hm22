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

/* 3) Напишіть програму, яка питає у користувача номер квартири (команда prompt()) і виводить в консоль номер поверху і номер під'їзду.

Відомо, що в одному під'їзді 9 поверхів по 3 квартири на кожному поверсі. Результат (поверх і під'їзд) відобразіть в консолі (команда console.log()).

Округлити можна за допомогою команд Math.floor() або Math.ceil() */

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = +prompt('enter your appart number');
const yourBlock = Math.ceil(roomNumber / floors / roomsOnFloor);
// const yourStage = Math.ceil(roomNumber / yourBlock / roomsOnFloor);
const yourStage = Math.ceil(
  (roomNumber - (yourBlock - 1) * roomsOnFloor * floors) / roomsOnFloor
);

console.log(
  `Your appart ${roomNumber} based in ${yourStage} stage and your block is ${yourBlock}`
);

/* 4) Напишіть програму, яка питає у користувача температуру в Цельсіях и конвертує її в Фаренгейти. Результат відобразіть в консолі.

Формула для конвертації: Цельсій х 1,8 + 32 = Фаренгейт */

const temp = +prompt('Enter temperature in \u2103');

console.log(`${temp}\u2103 is ${temp * 1.8 + 32}\u2109`);
