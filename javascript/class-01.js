/*
//console.log("hello world");
var coffeQty = 1000;
var coffeQty = 1000500;
console.log(coffeQty);
var myName = "Suba Nahian";
console.log(myName);
console.log((30 + 60) / 100);
var x = 5;
var y = 6;
var z = x + y;
console.log(z);
var x = (100 + 50) * 3;
console.log(x);
var x = 10;
x *= 5;
console.log(x);
var y = 10;
y /= 5;
console.log(y);
var teaQnt = 100;
var preTeaQnt = teaQnt;
teaQnt = teaQnt * 500;
console.log("Before tea: ", preTeaQnt);
console.log("After tea: ", teaQnt);

var pocketTk = 60;
var fuckaTk = 50;
if (pocketTk > fuckaTk) {
  console.log("fucka khabo");
}
//var pocketrTk = 400;
//var fuckarTk = 500;
//if ((pocketrTk) => fuckarTk) {
// console.log("fucka khabo");
//} else {
// console.log("fucka khabona");
//}
console.log("##");

//letter-check
let letter = b;

if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

//time
var time = 12;
if (time >= 0 && time <= 11) {
  console.log("Good Morning");
} else if (time >= 12 && time <= 17) {
  console.log("Good Afternoon");
} else if (time >= 18 && time <= 21) {
  console.log("Good Evening");
} else if (time >= 22 && time <= 23) {
  console.log("Good Night");
} else {
  console.log("Invalid time");
}
//
var username = admin;
var password = 1234;

if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}

//prob

var letter = a;
if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
//function
function add(a, b) {
  return a + b;
}
console.log(add(a, b));

//array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sumOfNum = function (val) {
  let sum = 0;
  val.forEach(function (elem) {
    sum += elem;
  });
  return sum;
};
*/
var shoppingCard = ["book", "html", "css"];
console.log(shoppingCard);
console.log(`There are ${shoppingCard.length} iteam in shopping card`);

//function
function bigNum(num, num1) {
  if (num > num1) {
    return num;
  } else if (num1 > num) {
    return num1;
  }
}
console.log(bigNum(85, 40));

//array
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);
