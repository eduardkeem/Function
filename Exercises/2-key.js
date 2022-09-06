'use strict';

/* Реализуйте функцию `generateKey(length, characters)`, возвращающую строку
случайных символов из набора `characters` длиной `length`. Например:
```js
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i */


const generateKey = (length, possible) => {
  const base = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += possible[index];                        // Буква из строки по индексу
  }
  return key;
};

/* const generateKey = (length, possible) => {
  let str = '';
  for (let i = 0; i < length; i++) {
    const symbol = Math.floor(Math.random() * possible.length);
    console.log(symbol);
    str += possible.substring(symbol, symbol + 1);
  }
  return str;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key);*/

module.exports = { generateKey };
