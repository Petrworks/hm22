/* 1) Напишіть функцію fillArray, яка створює масив і заповнює його заданим значенням.

let array = fillArray(3, 'qwerty');
console.log(array); // ['qwerty', 'qwerty', 'qwerty']
де 3 - це довжина масиву, а 'qwerty' значення кожного елементу масива */

function fillArray(arraySize, value) {
  let arr = new Array(arraySize).fill(value);

  console.log(arr);
  // return arr;
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
}
filterArray([0, 1, 2, null, undefined, 'qwerty', false, NaN]);

/* 4) Напишіть функцію spliceFour, яка видаляє 4й елемент масиву і замінює його строкою 'JavaScript'

let array = [1, 2, 3, 4, 5];
let result = spliceFour(array);
console.log(result); // [1, 2, 3, 'JavaScript', 5]; */

function spliceFour(arr4) 