/* 1) Створіть об'єкт vegetable, з такими  властивостями, щоб наступний код повернув "onions are usually white".

const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`); */

let vegetable = {
  name: 'onion',
  color: 'white',
};

const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`);

/* 2) Додайте в об'єкт vegetable такі властивості, щоб в консоль вивелося "onions are usually round".

const { shape } = vegetable;
console.log(`${name}s are usually ${shape}`); */

vegetable.round = 'round';
const shape = vegetable.round;
console.log(vegetable);
console.log(`${name}s are usually ${shape}`);

/* 3) Cтворіть масив об'єктів vegetables (кожен елемент масиву, повинен мати таку ж саму структуру як і об'єкт vegetable) так, щоб наступний код повернув "cucumbers are usually green", "tomatoes are usually red" 

const [cucumber, tomato] = vegetables;
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`); */

const veget1 = {
  name: 'cucumber',
  color: 'green',
};
const veget2 = {
  name: 'tomato',
  color: 'red',
};
let vegetables = [veget1, veget2];
const [cucumber, tomato] = vegetables;

console.log(vegetables);
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`);

/* Використовуючи деструктуризацію можно поділити масив на необхідні частини. Наприклад, записати в змінну окремо об'єкт onion, а інші овочі, які залишилися - в новий масив otherVegetables.*/

vegetables.unshift(vegetable);

const [firstVegetable, ...otherVegetables] = vegetables;
console.log(firstVegetable.name === vegetable.name); // true

const veget3 = {
  name: 'pumpkin',
  color: 'orange',
};
const pumpkin = veget3;
vegetables[3] = veget3;
// const [, , pumpkin] = vegetables;
console.log(vegetables);
console.log(`${pumpkin.name}s are usually ${pumpkin.color}`); //pubpkins are usually orange

/* 4) На основі прикладів, які вказані вище, створіть масив об'єктів students, виведіть 2й елемент масиву і довжину масиву елементів, що залишилися. */

let students = [
  { name: 'Kate', age: 25 },
  { name: 'Artur', age: 30 },
  { name: 'Nick', age: 15 },
  { name: 'Alex', age: 28 },
  { name: 'Zhenia', age: 45 },
];

const [Kate, Artur, Nick, Alex, Zhenia] = students;
console.log(
  `${Artur.name} is ${Artur.age}, length of students array is ${students.length}`
);
