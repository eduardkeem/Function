'use strict';

/* Реализуйте интроспекцию объекта:
- Проитерируйте все ключи объекта `iface`
- Возьмите ключи функционального типа
- Для каждой функции возьмите количество аргументов
- Сохраните результаты в двумерный массив*/


const obj = {
  m1: (x) => [x],
  m2: (x, y) => [x, y],
  m3(x, y, z) {
    return [x, y, z];
  },
};

// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]

const methods = (iface) => {
  const mainArray = [];
  Object.keys(iface).forEach((key) => {
    const array = [];
    array.push(key, iface[key].length);
    mainArray.push(array);
  });
  return mainArray;
};

console.log(methods(obj));

module.exports = { methods };
