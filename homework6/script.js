/*
  1) Напишіть програму, яка рахує в якій чверті
  знаходиться вказане користувачем число.
  Результат вивести в консоль.

  **Приклад:
    Якщо number === 48, то виведе 4
    Якщо number === 150, то виведе Error
    Якщо number === 15, то виведе 2
    Якщо number === 59, то виведе 4
*/

{
  const seconds = prompt('Enter seconds');

  if (
    seconds.length &&
    isFinite(seconds) &&
    !(Number(seconds) % 1) &&
    seconds >= 0 &&
    seconds < 60
  ) {
    if (seconds >= 0 && seconds < 15) {
      console.log(1);
    } else if (seconds >= 15 && seconds < 30) {
      console.log(2);
    } else if (seconds >= 30 && seconds < 45) {
      console.log(3);
    } else {
      console.log(4);
    }
  } else {
    console.error('Not valid data');
  }
}

/* 
  2) Напишіть програму, яка питає у користувача число
  і виводить в консоль наступну інформацію про нього:
  - додатнє воно чи від'ємне;
  - скільки цифр в цьому числі;
  - якщо число додатнє, виведіть суму його цифр

  **Приклад:
    Якщо number === 0, то виведе '0, lenght: 1'
    Якщо number === 100500, то виведе 'positive, length: 6, sum: 6'
    Если number === -50, то виведе 'negative, length: 2'
*/
{
  const number = prompt('Enter your number');

  if (number.length && isFinite(number)) {
    let sum = 0;
    if (number > 0) {
      for (let i = 0; i <= number.length - 1; i++) {
        sum += Number(number[i]);
      }
      console.log(`positive, length: ${number.length}, sum: ${sum}`);
    } else if (number === '0') {
      console.log(`0, length: ${number.length}`);
    } else if (number < 0) {
      console.log(`negative, length: ${number.length - 1}`);
    }
  } else {
    console.log('Not valid data');
  }
}
/*
  3) Відомо, что подорож на Мальдиви коштує 3000$, а купити нові AirPods - 300$.
  Напишіть програму, яка питає у користувача число (в $) та
  виводить в консоль інформацію, що він за ці гроші може купити.

  **Приклад:
    Якщо money === 200$, то виведе 'You can't do anything. I'm sorry :(';
    Якщо money === 300$, то виведе 'You can buy only AirPods';
    Якщо money === 3200.50$, то виведе 'You can go on vacation or buy AirPods! What are you waiting for?';
    Якщо money === 4300.53, то виведе 'You have enough money for everything. WOW!'
*/

const number = prompt('Enter your amount');

if (number.length && parseInt(number)) {
  if (parseInt(number) < 300) {
    console.log("You can't do anything. I'm sorry :(");
  } else if (parseInt(number) === 300 && parseInt(number) < 3000) {
    console.log('You can buy only AirPods');
  } else if (parseInt(number) >= 3000 && parseInt(number) < 4000) {
    console.log(
      'You can go on vacation or buy AirPods! What are you waiting for?'
    );
  } else if (parseInt(number) >= 4000) {
    console.log('You have enough money for everything. WOW!');
  }
} else {
  console.log('Invalid data');
}

/*
  4) Напишіть програму, яка питає у користувача число,
  виводить на экран всі числа від 1 до цього числа 
  та возводит в ступінь 2 кожне ПАРНЕ його число

  **Приклад:
    Якщо number === 5, то виведе '1 4 3 16 5'
*/

{
  const number = prompt('Enter number');

  if (
    number.length &&
    isFinite(number) &&
    !(Number(number) % 1) &&
    number > 0
  ) {
    let str = '';
    for (let i = 1; i <= number; i++) {
      if (!(i % 2)) {
        str += Math.pow(i, 2);
      } else {
        str += i;
      }

      if (i !== Number(number)) {
        str += ' ';
      }
    }
    console.log(str);
  } else {
    console.error('Invalid data');
  }
}

/*
  5) Напишіть програму, яка питає у користувача число
  від 1 до 9 і виводить таблицу множення для цього числа.

  **Приклад:
    Якщо number === 5, то виведе
      1 x 5 = 5;
      2 x 5 = 10;
      3 x 5 = 15;
      ...
      9 x 5 = 45;

  upd: Виведіть всю таблицу множення.
*/

const number1 = prompt('Enter value from 1 to 9');

if (number1.length && Number(number1) && number1 <= 9) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${i} * ${number1} = ${number1 * i}`);
  }
  if (number1 > 9) {
    console.log('Enter smaller value');
  }
} else {
  console.log('Not valid data');
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

/*
    6) Напишіть програму, яка питає у користувача символ та число
    і виводить цей символ послідовно, збільшуючи кожен раз на 1, поки 
    кількість символів в рядку не буде дорівнювати цьому числу.
  
    **Приклад:
      Якщо sybmol === #, number === 5, то виведе
      #
      ##
      ###
      ####
      #####
  
      Якщо sybmol === @, number === 6, то виведе
      @
      @@
      @@@
      @@@@
      @@@@@
      @@@@@@
  */

/*
    7) Напишіть цикл, який заповнює строку value числами від 1000 до 2000
    і додайте до кожного числа символи '&#'. Результат первірте в браузері,
    запустив index.html файл.
  
      Формат відповіді:
      console.log(value); // &#1000 &#1001 &#1002 ... &#1999 &#2000
  
    upd: Перевірте також код для значень від 7000 до 10000
  */

let result = document.getElementById('result');
let value = '';

// your code should be here

result.innerHTML = value;

/*
    8) Напишіть програму, яка питає у користувача число і повертає його
    в перевернутому виді. Програма повина працювати і для додатніх і для
    від'ємних чисел.
  
    **Приклад:
      Якщо number === 5678, то виведе 8765
      Якщо number === 8, то виведе 8
      Якщо number === 0, то виведе 0
      Якщо number === -98463, то виведе -36489
  */

{
  const number = prompt('Enter number');

  if (number.length && isFinite(number) && !(Number(number) % 1)) {
    let reversedNumber = '';
    if (number >= 0) {
      for (let i = number.length - 1; i >= 0; i--) {
        reversedNumber += number.charAt(i);
      }
      console.log(reversedNumber);
    } else {
      for (let i = number.length - 1; i > 0; i--) {
        reversedNumber += number.charAt(i);
      }
      console.log(`-${reversedNumber}`);
    }
  } else {
    console.error('Not valid data');
  }
}

/*
    9) Напишіть програму, яка питає у користувача число і виводить на
    экран ряд Фібоначі, який має стільки чисел, скільки запросив користувач.
  
    upd: Вирішити цю задачу через цикл з порожнім тілом.
  */

/*
    10) Напишіть програму, яка питає у користувача число (number) і підраховує 
    максимальне число n ітерацій за формулою 1 + 2 + ... + n <= number.
  
    **Приклад:
      Якщо number === 5, то виведе 2 // 1 + 2 + 3 <= 5
      Якщо number === 8, то виведе 3
  */
