// 1) Напишіть програму, яка питає у користувача скільки йому років (команда prompt()) та виводить його вік на екран (команда alert()).

const age = prompt('How old are you?');
alert(`You are ${age}`);

//2) Напишіть програму, яка питає у користувача як його звати, в якій країні і в якому місті він живе (команда prompt()) та виведіть результат у консоль в наступному виді (команда console.log())

const name = prompt('What is your name?');
const country = prompt('What is your country?');
const city = prompt('What is your city?');
console.log(`You name is ${name}. You live in ${city}, ${country}`);

// Напишіть програму, яка виводить в консоль (команда console.log()) тип даних 3х різних змінних. (Capture4.png)
//  Створіть змінну number та надайте їй значення 156798;
//  Створіть змінну string та надайте їй значення IT School Hillel;
//  Створіть змінну boolean та надайте їй значення false;
//  Відобразіть значення та її тип даних кожної змінної в консолі в наступному вигляді: value: <value>; type: <type>

const number = 156798;
const string = 'IT School Hillel';
const boolean = false;

console.log(`number: 156798; type: ${typeof number}`);
console.log(`string: 'IT School Hillel'; type: ${typeof string}`);
console.log(`boolean: false; type: ${typeof boolean}`);
