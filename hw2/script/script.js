"use strict";
//-------------1+
const arr = ["Капуста", "Репа", "Редиска", "Морковка"];

arr.forEach((item) => {
  console.log(item);
});

//-------------2+

let string = "Вася,Петя,Вова,Олег";

const arrString = string.split(",");

console.log(arrString);

//-------------3+

function hello2(name) {
  arguments.length === 0
    ? console.log("Привет, гость")
    : console.log(`Привет ${name}`);
}

hello2();
hello2("nadya");

//-------------4+

let fruits = ["яблоко", "ананас", "груша"];

const fruitsInUpperCase = (arr) => {
  return arr.map((item) => {
    return item.toUpperCase();
  });
}; // тут должен быть массив, в котором ['ЯБЛОКО', 'АНАНАС', 'ГРУША']

console.log(fruitsInUpperCase(fruits));

//-------------5+

function addOneForAll(...args) {
  return args.map((item) => item + 1);
}

const val = addOneForAll(1, 2, 3, 4);

console.log(val);

//-------------6+

function getSum(...args) {
  return args.reduce((total, item) => {
    return total + item;
  }, 0);
}

const totalSum = getSum(1, 2, 3, 4);
console.log(totalSum);

//-------------7+

const mixArr = [1, "hello", 2, 3, 4, "5", "6", 7, null];

const numberArray = (arr) => {
  return arr.filter((item) => {
    return typeof item === "number";
  });
};

console.log(numberArray(mixArr));
//-------------8+

function arrayTesting(arr) {
  return arr.some((item) => {
    return item == true;
  });
}

const haveTrueValue = arrayTesting([0, false, null, 1]); // Нашли true значение (потому что есть хотябы одно true значение - 1)

const dontHaveTrueValue = arrayTesting([0, false, null, 0]); // Ничего нет

console.log(haveTrueValue);
console.log(dontHaveTrueValue);
