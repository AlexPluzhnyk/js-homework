"use strict";
//-------------1
// Создать функцию конструктор Animal c аргументами name, age, color.
// Написать логику для того, чтобы функцию можно было вызывать как с, так и без new:

function Animal(name, age, colour) {
  if (!new.target) {
    return new Animal(name, age, colour);
  }
  this.name = name;
  this.age = age;
  this.color = colour;
}
const animal = Animal("bax-banny", "20", "grey");
console.log(animal);

//--------------------2
// Создайте функцию-конструктор Calculator, который создаёт объекты с такими методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// setAction() запрашивает действие при помощи prompt, которые мы хотим сделать (+, -, / и т.д)
// doAction() выполняет действие, которое юзер ввел (будет вызывать в себя методы sum, mul, min и т.д)
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// min() возвращает разницу введённых свойств.
// другие методы можете добавит если хотите (метод для квадратного корня и т.д.)
// const calculator = new Calculator();
// calculator.read();
// calculator.setAction();
// const tres = calculator.doAction(); // результат

function Calculator() {
  this.read = function () {
    this.a = parseInt(prompt("Введите первое число"));
    this.b = parseInt(prompt("Введите второе число"));
  };
  this.setAction = function () {
    this.action = prompt("Введите занак ( * , - , + , / )");
  };
  this.doAction = function () {
    this.result;

    switch (this.action) {
      case "+":
        this.result = this.a + this.b;
        break;
      case "*":
        this.result = this.a * this.b;
        break;
      case "-":
        this.result = this.a - this.b;
        break;
      case "/":
        this.result = this.a / this.b;
        break;
    }
    return this.result;
  };
}

const calculator = new Calculator();
calculator.read();
calculator.setAction();
const tres = calculator.doAction();
console.log(tres);

//--------------------3
// Создать функцию конструктор Nums, которая принимает бесконечное множество аргументов, и они записываются в свойство args в виде массива
// Добавить в прототип для всех объектов, которые создадим от конструктора Nums, 2 метода:
// метод getSum должен вернуть сумму всех элементов (которые только целые числа) массива args
// метод myFilterReverse должен отфильтровать массив и оставить только целые числа и развернуть массив (было [1, 2, 3] -> стало [3, 2, 1])
// Метод .reverse использовать нельзя :)
// только целые числа -> Number.isInteger(1); // true Number.IsInteger(1.2); // false

function Nums(...rest) {
  this.args = rest;
}

Nums.prototype.getSum = function () {
  const arr = this.args.filter(Number.isInteger);
  const result = arr.reduce((total, item) => {
    return total + item;
  });
  return result;
};

Nums.prototype.myFilterReverse = function () {
  const filtArray = this.args.filter(Number.isInteger);

  //return filtArray.reduce((a, b) => [b, ...a], []);
  return filtArray.reduce((result, b) => [b].concat(result), []);
};

const num = new Nums(1, 2, 3, 3, 5, 5.2);
console.log(num.getSum());
console.log(num.myFilterReverse());

//-------------------4
// Есть массив [1, 1, 2, 2, 3]
// Создать свой метод getUnique для любых массивов, который отфильтрует массив и оставит в нем только уникальные значения
// Подсказка: чтобы было легче почитайте про метод .includes()
Array.prototype.getUnique = function () {
  const total = new Set(this);
  return Array.from(total);
};

const arr = [1, 1, 2, 2, 3];
const newArr = arr.getUnique(); //  [1, 2, 3]
console.log(newArr);

//------------5
// Есть объект {a: 1, b: 2, c: 3, d: false, e: 0}; Нужно создать 2 метода для любых объектов:
// метод getKeySum, который найдет сумму значений всех ключей, которые true.
// метод reversKey который поменяет местави key и value (ключ и значение)
// Пример Был объект {a: 1, b: 2}.reversKey() -> стало {1: 'b', 2: 'a'}

const anyObj = { a: 1, b: 2, c: 3, d: false, e: 0 };

Object.prototype.getKeySum = function () {
  const arr = Object.entries(this);
  const result = arr.reduce((total, item) => {
    let [key, value] = item;
    if (!key) {
      return total;
    }
    return Number.isInteger(value) ? total + value : total;
  }, 0);
  return result;
};

console.log(anyObj.getKeySum());

const test = { a: 1, b: 2 };

Object.prototype.reversKey = function () {
  const arr = Object.entries(this);
  const revers = {};
  arr.forEach(([key, value]) => {
    return (revers[value] = key);
  });
  return revers;
};

console.log(test);
console.log(test.reversKey());
