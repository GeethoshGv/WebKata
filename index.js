// Change the color of the text "This is an Umbrella" to blue color by using javascript

const textcolor = document.getElementById("h");

textcolor.style.color = "aqua";

///==============3===========
//Add values in Input 1 and input 2 fields with id 'in1', 'in2' and Display the resultant in the paragraph tag with id "result"
//Note: Values are assigned dynamically for evaluation

function calculateSum() {
  const in1 = parseInt(document.getElementById("in1").value);
  const in2 = parseInt(document.getElementById("in2").value);
  document.getElementById("result").innerHTML = in1 + in2;
}

//============4============

//Change the content of the paragraph tag with id name as hello from "Hello by HTML" to "Hello by JavaScript"

const change = document.getElementById("hello");

change.innerHTML = "Hello by javascript";

//==================5================

//Hide the elements with id name as hello from "Hello by HTML" using JavaScript with display property

const hide = document.getElementById("hello");

hide.style = "display:none";

//=================6=================
//Display "Hello World!" by using a p tag which is already present with id 'demo' in JavaScript

const add = document.getElementById("demo");
add.innerHTML = "Hello World!";

//====================7==================

//Display "Hello from Guvian!" in a paragraph tag, using Javascript

const paragraph = document.createElement("p");

paragraph.innerText = "Hello from Guvian!";

document.body.appendChild(paragraph);

//================8=================

// Getting Value Of Select Tag
//Display the value of selected option in paragraph tag with id 'selectedOption' using Javascript. Note: Values are changed dynamically for evaluation

function getSelectedOption() {
  const val = (document.getElementById("selectedOption").innerHTML =
    document.getElementsByTagName("select")[0].value);
}
getSelectedOption();

//=================9===================

// Getting Value Of Radio Button
//Display the value of selected radio button in paragraph tag with id 'selectedOption' using Javascript. Note: Values are changed dynamically for evaluation

function displaySelectedOption() {
  const option = document.querySelector('input[name="option"]:checked');
  const into = option ? option.value : "";
  var para = document.getElementById("selectedOption");
  para.textContent = into;
}
displaySelectedOption();

//=====10======================

// Multiply given two inputs with id 'in1' and 'in2' and display the values in paragraph tag with id 'result' using Javascript.

function multiply() {
  const inone = document.getElementById("in1").value;
  const intwo = document.getElementById("in2").value;

  document.getElementById("result").innerHTML = inone * intwo;
}

//================11================

// Check whether the given input string with id 'in1' includes 'Java'. if so, display true otherwise false in the paragraph tag with id 'result'.

function checkString() {
  var box = document.getElementById("in1").value;
  if (box.includes("Java") || box.includes("java") || box.includes("JAVA")) {
    document.getElementById("result").innerText = "true";
  } else {
    document.getElementById("result").innerText = "false";
  }
}

//================12===============

// Join all the given array elements to form a comma seperated string ["Red","Green","White","Black"].Display the resultant in the paragraph with id "demo"

const pp = document.getElementById("demo");

const arr = ["Red", "Green", "White", "Black"];

arr.join();

pp.innerHTML = arr;

//=====================13===================

// Raju is 13 years old. Display in the given paragraph with id 'demo' as 'Eligible to vote' if he is eligible otherwise 'Not eligible'

const pp = document.getElementById("demo");

const raju = 13;

if (raju <= 18) {
  pp.innerHTML = "Not eligible";
} else {
  pp.innerHTML = "Eligible to vote";
}

//===============14=============

// Given a number 4.4, Find the nearest greater number and display it in paragraph with id 'demo'

const pp = document.getElementById("demo");
pp.innerHTML = Math.ceil(4.4);

//======================15==================

function compare() {
  const one = parseInt(document.getElementById("in1").value);
  const two = parseInt(document.getElementById("in2").value);

  if (one < two) {
    document.getElementById("result").innerHTML = Boolean(1);
  } else {
    document.getElementById("result").innerHTML = Boolean(0);
  }
}

//   Change the colour of the element with id name as "changeMeToBlue" to blue colour by using Java Script.

const colorchange = document.getElementById("changeMeToBlue");

colorchange.style = "color:blue";

//Increase the font size of all the elements with class name as "increase" to 30px using JavaScript.

var size = document.querySelectorAll(".increase");

size.forEach(function (size) {
  size.style.fontSize = "30px";
});
