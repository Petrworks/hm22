/* Напишіть функцію, яка змінює фоновий колір тексту останнього параграфу в блоці <body>, а також функцію, яка змінює блоки footer и main місцями. */

const pElements = document.querySelectorAll('div p');

pElements[2].style.backgroundColor = 'green';
console.log(pElements);
main.after(footer);

/* Напишіть функцію, яка питає у користувача дозволу додати картинку (confirm()) і у разу згоди додає картинку на сторінку (посилання на картинку користувач повинен задавати самостійно). */

function confirmAdd() {
  if (confirm('Do you want add a foto?')) {
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
