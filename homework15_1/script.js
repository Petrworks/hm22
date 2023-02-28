/* 3) Для цього завдання вам знадобиться файл index.html, який закріплений внизу.
Запросіть у користувача число і додайте в середину форми теги <input> (перед кнопкою Register), кількість яких дорівнює цьому числу.

Вимоги до тегу <input>:

кожен input повинен мати клас input-item, value = `Input ${index}`;
останній інпут повинен мати додатковий клас margin-zero;
створіть власний клас, з властивістю background-color і додайте його всім непарним інпутам;
очістіть значення кожному третьому інпуту і задайте йому атрибут placeholder з будь-яким текстом.
Очікуваний результат закріплено в кінці. */

const value = prompt();

function addInput() {
  for (let i = 1; i <= value; i++) {
    let input = document.createElement('input');
    input += i;
    div.prepend(input);
  }
  const div = document.querySelector('input-item');

  const button = querySelector('.button');
  div.before(button);
  div.setAttribute('value', `Input ${index}`);
  const margin = div.querySelector('input-item:lastchild');
  margin.classList.add = '.margin-zero';
  const bgColor = div.querySelectorAll('input-color');
  bgColor = div.classList.add('input-color:nth-child(odd)');
  bgColor.style.backgroundColor = 'yellow';
}
addInput(value);
