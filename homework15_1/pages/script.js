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
  const input = document.createElement('input');
  const div = document.getElement('');
  div.appendChild(input);

  input.before(button);
  input.classList.add('input-item');
  input.setAttribute('value', `Input ${index}`);
  input.lastChild.classList.add('margin-zero');
}
