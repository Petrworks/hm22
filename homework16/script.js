/* 1) Напишите функцию, которая ищет подходящие фильмы из заданного списка. (Capture1.jpg) 

Используйте значение из инпута #search и событие input, чтобы подсчитать количество фильмов, которые удовлетворяют строке поиска. Выведите общий результат найденных фильмов в #filmsCount*/

const items = document.querySelectorAll('li');
const searchInput = document.querySelector('#search');
const countInput = document.querySelector('#filmsCount');

searchInput.addEventListener('input', function (event) {
  console.log(event.target.value);
});

console.log(items);

const search = (event) => {
  const searchValue = event.target.value.toUpperCase();
  if ('' === searchValue) {
    return;
  }
  const foundItems = [...items].filter(
    (item) => item.textContent.toUpperCase().indexOf(searchValue) > -1
  );
};
// console.log(arrList);

searchInput.addEventListener('keyup', search);

/* Напишите функцию, которая создает нумерованный подсписок по клику на опцию li.