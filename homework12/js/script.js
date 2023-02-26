/* 1) Створіть об'єкт vegetable, з такими  властивостями, щоб наступний код повернув "onions are usually white".

const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`); */

const vegetable = {
  name: 'onion',
  color: 'white',
};
// const name = onion.onion;
// const color = onion.white;
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

{
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
  // let name = veget1.cucumber;
  // let color = veget1.green;
  // let name = veget2.tomato;
  // let color = veget2.red;
  console.log(vegetables);
  console.log(`${cucumber.name}s are usually ${cucumber.color}`);
  console.log(`${tomato.name}s are usually ${tomato.color}`);
}
