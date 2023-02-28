'use strict';

/* 1) Створіть обʼєкт triangle з наступними властивостями: aSide, bSide, cSide.

Створіть метод setValues(), який питає у користувача значення і додає їх в ключі aSide, bSide, cSide.

Створіть в обʼєкті triangle метод для підрахунку периметра трикутника;
Створіть в обʼекті triangle метод, який перевіряє чи є цей трикутник рівностороннім;
Виведіть інформацію про створений трикутник (включаючи результати роботи усіх методів) в консоль. */

let triangle = {
  aSide: 0,
  bSide: 0,
  cSide: 0,
  setValues: function () {
    // triangle.aSide = +prompt('', '3');
    // triangle.bSide = +prompt('', '3');
    // triangle.cSide = +prompt('', '3');
  },
  getPerimeter: function () {
    let perimeter = this.aSide + this.bSide + this.cSide;
    return perimeter;
  },
  isEqualSides: function () {
    if (this.aSide === this.bSide && this.aSide === this.cSide) {
      let message = 'true';
      return message;
    } else {
      let message = 'false';
      return message;
    }
  },
};

triangle.setValues(); // for examle 3 3 3
console.log(triangle.getPerimeter()); // 9
console.log(triangle.isEqualSides()); // true
console.log(
  `It's triangle with sides: ${triangle.aSide}, ${triangle.bSide}, ${
    triangle.cSide
  }.\nPerimetr = ${triangle.getPerimeter()}  and isEqualSides - ${triangle.isEqualSides()}`
);

/* 2) Створіть обʼєкт calculator з методами:

read() визиває prompt() для заповнення двох значень і зберігає їх як властивості обʼєкту x, y;
sum() повертає суму цих двох значень;
multi() повертає добуток цих двох значень;
diff() повертає різницю цих двох значень;
div() повертає ділення цих двох значень; */

let calculator = {
  x: 0,
  y: 0,
  read: function () {
    // calculator.x = +prompt('', '5');
    // calculator.y = +prompt('', '2');
  },
  getSum: function () {
    const sum = this.x + this.y;
    return sum;
  },
  getMulti: function () {
    const multi = this.x * this.y;
    return multi;
  },
  getDiff: function () {
    const diff = this.x - this.y;
    return diff;
  },
  getDiv: function () {
    const div = this.x / this.y;
    return div;
  },
};

calculator.read(); // for example 5 2
console.log(calculator.getSum()); // 7
console.log(calculator.getDiff()); // 3

/* 3) Даний обʼєкт country і функція format():

Допишіть код так, щоб в консолі зʼявились рядки, які вказані в коментарях. */

var country = {
  name: 'Ukraine',
  language: 'ukrainian',
  capital: {
    name: 'Kyiv',
    population: 2907817,
    area: 847.66,
  },
};
function format(start, end) {
  console.log(start + this.name + end);
}
format.call(country, [], []); // Ukraine
format.apply(country, [[], []]); // [Ukraine]
format.call(country.capital, [], []); // Kyiv
format.apply(country.capital, [[], []]); // Kyiv
format.apply(country, [[], []]); // undefined

/* 4) Що поверне даний код на екран і чому?
 --без аргументів буде повернено undefined
 --з аргументом text буде 'outside' так як при створенні області видимості для logIt було иснувала тільки text = 'outside' */

var text = 'outside';
function logIt(d) {
  console.log(d);
  var text = 'inside';
}
logIt(text);
