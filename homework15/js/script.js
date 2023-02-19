/* Напишіть функцію, яка змінює фоновий колір тексту останнього параграфу в блоці <body>, а також функцію, яка змінює блоки footer и main місцями. */

const pElements = document.querySelectorAll('div p');

pElements[2].style.backgroundColor = 'green';
console.log(pElements);
main.after(footer);

/* Напишіть функцію, яка питає у користувача дозволу додати картинку (confirm()) і у разу згоди додає картинку на сторінку (посилання на картинку користувач повинен задавати самостійно). */

function confirmAdd() {
  if (confirm('Do you want add a foto?') == true) {
    const img = document.createElement('img');
    img.src =
      'https://thumbs.dreamstime.com/b/tiger-portrait-horizontal-11392212.jpg';
    const div = document.getElementById('wrapper');
    div.appendChild(img);
  } else {
    text = 'Ok(';
  }
}
confirmAdd();

/* 3) Для цього завдання вам знадобиться файл index.html, який закріплений внизу.

Запросіть у користувача число і додайте в середину форми теги <input> (перед кнопкою Register), кількість яких дорівнює цьому числу.

Вимоги до тегу <input>:

кожен інпут повинен мати клас input-item, value = `Input ${index}`;
останній інпут повинен мати додатковий клас margin-zero;
створіть власний клас, з властивістю background-color і додайте його всім непарним інпутам;
очістіть значення кожному третьому інпуту і задайте йому атрибут placeholder з будь-яким текстом.
Очікуваний результат закріплено в кінці. */
