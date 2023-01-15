/* 1) Напишіть програму, яка питає у користувача номер автобуса.

Якщо це номер 7, 255 или 115, тоді користувач може їхати. Виведіть в консолі "You can go".
Якщо ні - виведіть в консолі "Please wait".*/

const busNum = +prompt();
switch (busNum) {
  case 7:
    console.log(`\"You can go\"`);
    break;
  case 115:
    console.log(`\"You can go\"`);
    break;
  case 255:
    console.log(`\"You can go\"`);
    break;
  default:
    console.log(`\"Please wait\"`);
    break;
}
