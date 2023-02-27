/* 1) Створіть функцію createBuffer(), яка створює локальну змінну text у вигляді порожнього рядка і повертає функцію buffer, з якою можна працювати наступним чином:

Якщо в функцию buffer був переданий параметр типу string – цей параметр записується у змінну text. В противному випадку виведіть повідомлення про помилку.
Якщо функція buffer викликається без параметрів – повертається значення змінної text.
Створіть змінну і запишіть в неї результат виконання функції createBuffer().

Продемонструйте роботу функції з параметром і без.

let buffer = createBuffer();
buffer("A");
buffer("XYZ");
console.log(buffer()); // AXYZ */

function createBuffer() {
  let text = '';
  return function buffer(value) {
    if (typeof value === 'string') return (text += value);
    if (value === undefined) {
      return text;
    } else {
      return console.log('wrong string');
    }
    return text;
  };
}
const buffer = createBuffer();
// buffer();
buffer('A');
buffer('XYZ');
console.log(buffer());

/* 2) Створіть функцію signUp(), яка приймає параметри userName, password і повертає обʼєкт з ключем userName і методом signIn().
Метод signIn() приймає параметр newPassword і порівнює його значення зі значенням password.

Якщо паролі співпадають – метод повертає повідомлення 'Sign in success for ${userName}' , якщо ні – 'Password is incorrect' .

Створіть змінну user і запишіть в неї результат виклику функції signUp().
Результат роботи функції виведіть в консоль.

let user = signUp("billy", "qwerty");
console.log(user.signIn("a")); // Password is incorrect
console.log(user.signIn("qwerty")); // Sign in success for billy */

function signUp(userName, password) {
  return {
    userName: userName,
    signIn: function (newPassword) {
      if (password === newPassword) {
        return `Sign in success for ${userName}`;
      } else {
        return 'Password is incorrect';
      }
    },
  };
}
const user = signUp('billy', 'qwerty');
console.log(user.signIn('a'));
console.log(user.signIn('qwerty'));
