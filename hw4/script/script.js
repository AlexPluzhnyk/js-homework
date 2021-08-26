"use strict";

//--------------1
// Написать функцию bindFunc, которая принимает в себя 2 + аргументов (Точно должна принять 2 аргумента, а дальше сколько угодно).

function poliBind(fn, context, ...rest) {
  return function (...args) {
    const id = Date.now().toString();

    context[id] = fn;

    const result = context[id](...rest.concat(args));

    delete context[id];

    return result;
  };
}

//-----------------2
// Написать функцию, которая не принимает никаких аргументов.
// В теле функции написать логику для нахождения суммы значений любого количества ключей
// (значения ключей должны быть больше нуля) из переданного контекста.

const func = function () {
  const obj = this;

  const arrayKey = Object.values(obj);
  const filterKey = arrayKey.filter((item) => {
    return item > 0 && typeof item === "number";
  });
  const totalRest = filterKey.reduce((total, item) => {
    return total + item;
  });

  return totalRest;
};

const objectA = {
  a: 1,
  b: 2,
  c: 3,
  d: "Ivan",
  e: 7,
};

func.bind(objectA)();

//-----------------3
// Написать функцию, которая возвращает новый массив, в котором должны быть только четные числа, которые больше двуx и меньше 10.
// Новый массив будет состоять из значений ключа values из контекста, если такого ключа нет, то выводим сообщение "Не найдено".
// Обращаться к valObject0 напрямую нельзя :)
// Если хотите использовать map, то внутри map this всегда равен глобальному объекту.
// Чтобы это поменять передаем нужное значение this во второй аргумент map -
// arr.map(() => {}, this);

function getNewArray() {
  if (!this.values) {
    console.log("Не найдено");
    return;
  }
  const copy = this.values;

  const newArray = copy.filter((item) => {
    return item % 2 == 0 && typeof item === "number" && item > 2 && item < 10;
  });

  console.log(newArray);
  return newArray;
}

const valObject0 = {
  values: [1, "2", 4, 8, "8", 3, 10, null, false],
};

const result = getNewArray.bind(valObject0);
console.log(result());

//Не понял где тут нужно было применить map?
