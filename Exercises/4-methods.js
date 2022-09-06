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

const methods = (iface) => {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);          // Сразу можно запушить массив в массив
    }
  }
  return names;
};

/* const methods = (iface) => {
  const mainArray = [];
  Object.keys(iface).forEach((key) => {
    const array = [];
    array.push(key, iface[key].length);
    mainArray.push(array);
  });
  return mainArray;
};

console.log(methods(obj)); */

module.exports = { methods };
