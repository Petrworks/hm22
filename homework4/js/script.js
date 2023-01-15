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

/* 2) Напишіть програму, яка отримує від користувача число і порівнює його з числом Pi. (Math.PI)

Порівняйте, чи є це число більше ніж число Pi.
Порівняйте, чи є це число менше ніж число Pi.
Порівняйте, чи це число дорівнює числу Pi.
Якщо введене значення не є числове, виведіть в консоль повідомлення про помилку.
Всі результати відобразіть в наступному форматі:

You entered: <number> 
Is greater then PI: true
Is less then PI: false
Is equal PI: false    */

const numPi = prompt();

if (numPi > Math.PI) {
  console.log(`You entered: ${numPi} 
  It's greater then PI: true`);
} else if (numPi < Math.PI) {
  console.log(`You entered: ${numPi} 
  It's less then PI: false`);
} else if (numPi < Math.PI) {
  console.log(`You entered: ${numPi} 
  It's equal PI: false`);
} else if (isNaN) {
  console.log(`You entered: ${numPi} 
  It's a wrong data`);
}
