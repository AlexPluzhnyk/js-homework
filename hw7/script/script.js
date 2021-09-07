//---------------1
// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.

const arr = ["Vasya", "Petya", "Alexey"];
function removeUser(array, index) {
  return array.splice(index, 1);
}

removeUser(arr, 1);
console.log(arr); /// ['Vasya', 'Alexey']

//--------------2

let container = document.getElementById("div");
console.log(container);
let square1 = document.createElement("div");
let square2 = document.createElement("div");
let square3 = document.createElement("div");
container.append(square2);
square2.before(square1);
square2.after(square3);
square1.className = "container__square1";
square2.className = "container__square2";
square3.className = "container__square3";

//----------------3

const holder = document.getElementById("holder");

const itemArray = [];

const addItem = (teg, atrValue, value) => {
  for (let i = 1; i <= value; i++) {
    const elem = document.createElement(teg);
    elem.setAttribute("class", `${atrValue}-${i}`);
    elem.innerText = i;
    itemArray.push(elem);
  }
};
addItem("div", "item", 5);

holder.append(...itemArray);

//------------------4
// Напилить код функции modificator, такой, чтобы в результате работы кода была строка "sampleFunc: test | sample":

function sampleFunc() {
  console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`);
}

function modificator(func) {
  return func.bind(null, "test", "sample");
}

const testFunc = modificator(sampleFunc);

console.log(testFunc()); // sampleFunc: test | sample

//-----------------5
//Создать массив group, элементы которого будут объектами, содержащими данные каждого студента группы

const group = [
  {
    name: "Ivan",
    lastName: "Ivanov",
    age: 20,
    notebook: false,
  },
  {
    name: "Petya",
    lastName: "Petrov",
    age: 30,
    notebook: true,
  },
];
//Создать функцию, которая итерирует массив group, выводя в консоль данные каждого студента одной строкой
//( предварительно преобразовав объект в строку, не забудьте сивол-разделитель )

Object.prototype.toString = function () {
  let str = "";
  const array = Object.entries(this);
  array.forEach((item) => {
    str += `${item[0]} - ${item[1]}, `;
  });
  return str;
};

function getStudentsList(arrayOfStudents) {
  arrayOfStudents.forEach((item) => {
    console.log(String(item));
  });
}
getStudentsList(group);
