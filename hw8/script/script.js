"use strict";
//---------------1
const p = document.createElement("p");
const img = document.createElement("img");

p.addEventListener("click", (e) => {
  document.body.append(img);
  img.setAttribute("class", "img");
});

img.onmouseover = function (event) {
  let target = event.target;
  target.setAttribute("class", "onFoc");
};
img.onmouseout = function (event) {
  let target = event.target;
  target.setAttribute("class", "img");
};
img.addEventListener("click", (e) => {
  e.target.remove();
});

p.innerText = "Enter";
document.body.append(p);

//-----------------2
// Дан массив с числами.
// Найдите сумму последних N элементов до первого нуля с конца.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.

const array = [1, 2, 3, 0, 4, 5, 6];

const total = array.reduceRight((acc, item) => {
  return item > 0 ? acc + item : false;
}, 0);

console.log(total);

//------------------3
//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const anyArray = [1, 3, 2, 4, 6, 4, 7, 5, 3];
let step = 0;

anyArray.reduce((acc, item) => {
  if (acc >= 10) {
    return acc;
  } else {
    step++;
    return acc + item;
  }
}, 0);

console.log(step);

//----------------4
//Есть инпут, в который что-то вводим. Рядом с инпутом есть кнопка.
//По нажатию на кнопку выводим в консоль то, что вписали в инпут.

const input = document.getElementById("input");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  console.log(input.value);
});

//-----------------5
//Привяжите всем ссылкам в документе событие - по наведению на ссылку в конец ее
//текста дописывается ее href в круглых скобках.

//Первый вариант

// const link = document.querySelectorAll("a");
// link.forEach((item) => {
//   item.onmouseover = (event) => {
//     let i = event.target;
//     i.text = `${i.text} (${i.href})`;
//   };
// });

//Второй вариант

// function onMouseOver(event) {
//   const target = event.target;
//   if (target.tagName.toLowerCase() === "a") {
//     target.innerHTML = target.innerHTML + " " + target.getAttribute("href");
//   }
// }
// document.body.addEventListener("mouseover", onMouseOver);

//Третий

function onMouseOver(event) {
  const target = event.target;
  target.innerHTML += " " + target.getAttribute("href");
  target.removeEventListener("mouseover", onMouseOver);
}
const link = document.querySelectorAll("a");

link.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});
//-------------------6

const hide = document.getElementById("hide");
const div = document.getElementById("div");

hide.addEventListener("click", () => {
  div.innerHTML = "";
});

//--------------------7

const styleCircle = `
width: 50px;
height: 50px;
background: red;
border-radius: 50%;
position: relative;
display: inline-block;
cursor: pointer;
transition: 3s;
top: 30%;
`;

const pxInp = document.getElementById("container-input");
const btnStart = document.getElementById("btnStart");
const circlePX = document.getElementById("circlePX");

function circlePxValidation(item) {
  let trigger = Number.parseInt(item.value);
  if (!Number.isNaN(trigger)) {
    if (trigger < 600) {
      circlePX.setAttribute(
        "style",
        `${styleCircle}margin-left: ${trigger}px;`
      );
    } else {
      item.value = "Ошибка";
    }
  } else {
    item.value = "";
  }
}

btnStart.addEventListener("click", () => {
  circlePxValidation(pxInp);
});
