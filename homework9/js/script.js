/* 1) Напишіть функцію fillArray, яка створює масив і заповнює його заданим значенням.

let array = fillArray(3, 'qwerty');
console.log(array); // ['qwerty', 'qwerty', 'qwerty']
де 3 - це довжина масиву, а 'qwerty' значення кожного елементу масива */

function fillArray(arraySize, value) {
  let arr = new Array(arraySize).fill(value);

  console.log(arr);
  return arr;
}
fillArray(5, 'ttt');

/* 2) Напишіть функцію reverseArray, яка перевертає значення масиву задом наперед.

let array = ['My', 'life', '-', 'my', 'rules'];
let result = reverseArray(array);
сonsole.log(result); // ['rules', 'my', '-', 'life', 'My']; */

function reverseArray(arr) {
  let arrRev = new Array(arr.reverse());
  console.log(arrRev);
}
reverseArray(['My', 'life', '-', 'my', 'rules']);

/* 3) Напишіть функцію filterArray, яка очищує масив від небажаних значень (false, undefined, '', 0, null, NaN).

let array = [0, 1, 2, null, undefined, 'qwerty', false, NaN];
let result = filterArray(array);
console.log(result); // [1,2, 'qwerty']; */

function filterArray(arr3) {
  let arrFilter = new Array(arr3.filter((item) => Boolean(item) == true));
  console.log(arrFilter);
  return arrFilter;
}
filterArray([0, 1, 2, null, undefined, 'qwerty', false, NaN]);

/* 4) Напишіть функцію spliceFour, яка видаляє 4й елемент масиву і замінює його строкою 'JavaScript'

let array = [1, 2, 3, 4, 5];
let result = spliceFour(array);
console.log(result); // [1, 2, 3, 'JavaScript', 5]; */

function spliceFour(arr4) {
  let arrSplice = new Array(arr4.splice(3, 1, 'JavaScript'));
  console.log(arr4);
  return arrSplice;
}
spliceFour([1, 2, 3, 4, 5]);

/* 5) Напишіть функцію joinArray, яка перетворює масив в строку, з'єднуючи елементи заданим символом.

let array = [1, 2, 3, 4, 5];
let result = joinArray(array, '%');
console.log(result); // 1%2%3%4%5 */

function joinArray(arr5, value) {
  let arrString = arr5.join(value);
  console.log(arrString);
  return arrString;
}
joinArray([1, 2, 3, 4, 5], '%');

/* Напишіть функцію joinStr, яка повертає рядок, який утворений з конкатинацїї усіх рядків, які передані в якості аргументів функції через кому.

let string1 = joinStr(0);
console.log(string1); // ''
let string2 = joinStr(1,'hello',3, 'world');
console.log(string2); // 'hello,world'
let string3 = joinStr('g','o', 0, '0', null, 'd', {});
console.log(string3); // 'g,o,0,d' */

let string1 = 0;
console.log(string1);
let string2 = (1, 'hello', 3, 'world');
let string3 = ('g', 'o', 0, '0', null, 'd', {});

function joinStr(concatString) {
  let arrString = concatString.toString();

  function concatString(...args) {
    console.log(args);
    return concatString;
  }
  concatString(string1, string2, string3);
  console.log(arrString);
  return arrString;
}
joinStr();

/* 7*) (опціонально) Напишіть функцію advancedFillArray, яка створює масив і заповнює його випадковими значеннями чисел з заданого діапазону. (Логіку створення випадкового числа оберніть в функцію setRandomValue(min, max)).

let array  = advancedFillArray(5, 1, 15);
console.log(array); // [2, 4, 6, 13, 10];
де 5 - це довжина масива, 1 - це мінімальне значення, 15 - це максимальне значення.

tips: тут вам станеться у нагоді функція fillArray, яку ви вже написали в першому завданні та метод масиву map для того щоб змінити значення на потрібні. */

function advancedFillArray(arraySize7) {
  let arr7 = new Array(arraySize7).fill(setRandomValue).map(setRandomValue);
  {
    function setRandomValue(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      console.log(min, max);
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
  setRandomValue(1, 8);
  return arr7;
}
advancedFillArray(5);
