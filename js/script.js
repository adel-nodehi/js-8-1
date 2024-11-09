"use strict";

/*
const createFunction = function (baseYear) {
  //
  return function (birthYear) {
    return baseYear - birthYear;
  };
};

const calcAge2030 = createFunction(2030);

const calcAge2024 = createFunction(2024);

console.log(calcAge2030(2012));
console.log(calcAge2024(2012));
*/

/*
// bind, call, apply
const printInfo = function (emoji) {
  console.log(this);
  console.log(`My name is ${this.name}, i'm ${this.age} years old ${emoji}.`);
};

const negin = {
  name: "Negin",
  age: 20,
};

const hossein = {
  name: "Hossein",
  age: 22,
};

const printNeginInfo = printInfo.bind(negin, "🎉");
printNeginInfo();

printInfo.call(hossein, "🎈");

printInfo.apply(hossein, ["🎂", "hello"]);

// printInfo();

// printInfo.call(hossein);
*/

/*
// IIFE function
(function () {
  const images = ["image1.png", "image2.png"];
  const activeImage = 1;
})();
*/

/*
// closure
const createCounter = function () {
  let counter = 1;

  return function () {
    console.log(counter++);
    // counter++;
  };
};

const count = createCounter();
const count2 = createCounter();

count();
count();
count();
count2();
count2();
*/

/*
// setTimeout
setTimeout(function () {
  console.log("setTimeout: 1 second passed");
}, 1000);

setInterval(function () {
  console.log("setInterval: 1 second passed.");
}, 1000);


// let remindingTime = 5;

// const intervalId = setInterval(function () {
//   console.log(remindingTime);

//   remindingTime -= 1;

//   if (remindingTime <= 0) clearInterval(intervalId);
// }, 1000);
*/

/*
// synchronous
console.log("hello 1");
synchronous long task: Block our code
prompt("say something!");
console.log("hello 2");
*/

/*
// asynchronous
console.log("before Timeout");
setTimeout(function () {
  console.log("setTimeout: 1 second passed");
}, 1000);
console.log("after Timeout");
*/

const createCard = function (adviceData) {
  const div = document.createElement("div");

  const id = document.createElement("p");
  id.textContent = adviceData.id;

  const advice = document.createElement("p");
  advice.textContent = adviceData.advice;

  div.append(id, advice);

  document.querySelector(".container").append(div);
};

// AJAX: Asynchronous JavaScript and XML
const request = new XMLHttpRequest();
request.open("GET", "https://api.adviceslip.com/advice");
request.send();

request.addEventListener("load", function () {
  const response = JSON.parse(request.responseText);

  const { slip: adviceData } = response;

  createCard(adviceData);

  // request another advice
  const request2 = new XMLHttpRequest();
  request2.open("GET", "https://api.adviceslip.com/advice");
  request2.send();

  request2.addEventListener("load", function () {
    const response = JSON.parse(request2.responseText);

    const { slip: adviceData } = response;

    createCard(adviceData);
  });
});
