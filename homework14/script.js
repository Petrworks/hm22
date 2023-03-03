/* 1) Створіть об'єкт coffeeMachine з властивістю message: ‘Your coffee is ready!’ і методом start(), при виклику якого через 3 секунди в консоль виведеться повідомлення, яке записане у ключі message. */

let coffeeMachine = {
  message: 'Your coffee is ready!',
  start: function () {
    setTimeout(function () {
      console.log(coffeeMachine.message);
    }, 3000);
  },
};
coffeeMachine.start(); // 'Your coffee is ready!'

/* Створіть об'єкт teaPlease з властивістю message: 'Wanna some tea instead of coffee?'. Оновіть в методі start() контекст так, щоб при наступному виклику методу start() він виводин повідомлення з нового об'єкту. */

let teaPlease = {
  message: 'Wanna some tea instead of coffee?',
};

coffeeMachine.start.call(teaPlease);

/* 2) Напишіть функцію concatStr(), яка поєднує два рядка, які розділені між собою якимось символом: роздільний символ і рядки передаються в параметрах функції. Використовуючи прив'язку аргументів з допомогою bind, створіть нову функцію hello(), яка виводить привітання тому, хто переданий в функцію в якості аргументу: */

let string = '';
function concatStr(arg1, arg2, arg3) {
  let newString = string.concat(arg1, arg2, arg3);
  console.log(newString);
  return newString;
}
concatStr('Hello', ', ', 'Matt'); // 'Hello Matt'

let hello = concatStr.bind(null, 'Hello', ', ');
let finalResult = hello('John'); // 'Hello John'

/* 3) Напишіть функцію showNumbers(), яка послідовно виводить в консоль числа в заданому діапазоні через заданий інтервал (всі дані повинні передаватись як параметри функції, тож тут ніякого this не буде).

tips: для реалізації використовуйте функцію setInterval() */

function showNumbers(start, end, time) {
  for (let i = start; i <= end; i++) {
    let intrevalId = setInterval(
      (function () {
        return function () {
          console.log(i);
        };
      })(i),
      time * (i + 1)
    );
    setTimeout(() => {
      clearInterval(intrevalId);
    }, 5500);
  }
}
showNumbers(5, 10, 500);

/* 4) Який результат виконання буде у даного коду? Поясніть чому. */

// function addBase(base) {
//   return function (num) {
//     return base + num;
//   };
// }
// let addOne = addBase(1);
// alert(addOne(5) + addOne(3));

//Ми викликаємо функцію addBase з аргументом 1,  отримуємо функцію, яку запісуємо в змину addOne. Потім ми викликаємо addOne(5), поверне 1+5, і addOne(3), поверне 1+3. Вивід alert - 10
