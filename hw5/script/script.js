"use strict";

//--------------1
// Дан объект с городами и странами.
// Написать функцию getCity. Эта функция (getCity) должна вернуть новый массив, элементы которого будут преобразованы
// в данный формат: <Столица> - это <Страна>.
// Доступ к объекту может быть любым (через контекст, напрямую и т.д.)
// Можно использовать Object.entries метод )

const citiesAndCountries = {
  Киев: "Украина",
  "Нью-Йорк": "США",
  Амстердам: "Нидерланды",
  Берлин: "Германия",
  Париж: "Франция",
  Лиссабон: "Португалия",
  Вена: "Австрия",
};

function getCity(obg) {
  const arrayCity = Object.entries(obg);
  const reversArrey = arrayCity.map((item) => {
    return item.reverse();
  });
  return reversArrey;
}

const result = getCity(citiesAndCountries); // ['Киев - это Украина', 'Нью-Йорк - это США', ... и т.д.]
console.log(result);

//-----------------2

const namesOfDays = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

function getNameOfDay(lang, datNumber) {
  if (!namesOfDays[lang]) {
    console.log("Нет такого языка");
    return;
  }
  const result = namesOfDays[lang][datNumber - 1];
  console.log(result);
  return result;
}

getNameOfDay("ru", 1); // "понедельник"

//-----------------3
// Написать универсальную функцию setProto, которая принимает в себя 2 аргумента (currentObj, protoObj).
// Функция должна устанавливать прототип (protoObj) для currentObj. То есть после вызова функции мы должны получить результат:

const person = {
  name: "Vlad",

  setName: function (name) {
    this.name = name;
  },
  getName: function () {
    return this.name;
  },
  ageValidation: function (age) {
    return age < 18 ? "Validation Error" : age;
  },
  setAge: function (age) {
    this.age = this.ageValidation(age);
  },
  getAge: function () {
    return this.age;
  },
};

const person1 = {
  age: 1,
};

function setProto(currentObj, protoObj) {
  Object.setPrototypeOf(currentObj, protoObj);
}

setProto(person1, person);
console.log(person1.name);
// Теперь прототипом для объекта person1 выступает объект person

//-----------------4

// Создать базовый объек person. Этот объект должен выступать в роли прототипа для объекта person1.
// В объекте person должны быть такие методы:

// метод для установки имени и возвраста (setName, setAge)
// метод для получения имени и возвраста (getName, getAge)
// метод для валидации возраста (ageValidation)
// person1.setName(...); // установили новое имя
// person1.getName(); // имя

// person1.setAge(...); // установили возраст
// person1.getAge(); // получили возраст

// Метод ageValidation вызывается при вывозе метода setAge (то есть внутри метода setAge).
// Метод ageValidation должен как-то проверить возраст, который мы вводим в setAge. Если возраст, который мы ввели,
// меньше 18, то записываем в age слово 'Validation Error', а есть введенный возраст больше 18, то вписываем в age это значение.

// ageValidation только проверяет данные, он ничего не записывает (в ageValidation не должно быть this.age = age)

person1.setAge(1); // передать возраст можно как угодно
console.log(person1.getAge()); // 'Validation Error'

person1.setAge(20); // передать возраст можно как угодно
console.log(person1.getAge()); // Новое значение - 20
