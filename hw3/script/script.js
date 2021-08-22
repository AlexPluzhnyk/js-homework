"use strict";

//--------------1+

const result = prompt("Enter number");

function sum(result) {
  const array = [];
  for (let i = 0; i <= result; i++) {
    array.push(i ** 2);
  }
  return array.reduce((total, item) => total + item);
}
console.log(sum(result));

//-----------------2+

const startArr = [3, 5, 12, 9, 23, 93, 17];

function filter(arr) {
  const number = arr.filter((item) => item > 2 && item < 20);
  return number.reduce((total, item) => total + item);
}

console.log(filter(startArr));

//-----------------3

const array = [
  [1, 6, 3, "6"],
  [10, 15, 13, "10"],
];

function sumElem(arr) {
  const filtArr = arr.flat();
  return filtArr.reduce((total, item) => {
    return typeof item === "number" && item % 2 == 0 ? total + item : total;
  });
}
console.log(sumElem(array), "3");

//-------------------4+

function createUser(key, value, obj) {
  if (obj[key]) {
    return console.log("Этот пользыватель уже есть!");
  }
  obj[key] = value;
  console.log("Добавил пользователя");
  console.log(obj);
}

createUser("job", "rider", { name: "ivan" });
