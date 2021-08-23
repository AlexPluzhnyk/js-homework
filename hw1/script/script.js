"use strict";

const nameFunc = (name) => {
  typeof name === "string"
    ? console.log(`Hello ${name}`)
    : console.log("Ошибка, не тот тип данных");
};

nameFunc("вася");

//----------------

nameFunc(null);

// ----------------

console.log(typeof 1);
console.log(typeof "string");
console.log(typeof null);
console.log(typeof bull);
console.log(typeof { name: "Ivan" });
console.log(typeof Symbol("id"));
console.log(typeof false);
console.log(typeof nameFunc);
console.log(typeof [1, 2, 3, 4]);
console.log(typeof undefined);
