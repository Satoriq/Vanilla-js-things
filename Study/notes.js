var myName;
myName = "My name is " + myName + " and I am swell!";

var someAdjective = "...";
var myStr = "Learning to code is ";
myStr += someAdjective;

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

var lastName = "LovePeace";
var secondToLastLetterOfLastName = lastName[lastName.length -2];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
    return result;
  }
wordBlanks("dog", "big", "ran", "quickly");

var myArray = [["girls", 2], ["cup", 1]];
var myArray = [1,2,3];
var myData = myArray[0];
myArray[0] = 3;
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1]; // = 8
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); //add to array
var removedFromMyArray = myArray.pop();  //delete last element from myArray, and = it to removedFromMyArray
//now removedFromMyArray === ["cat", 2] and  myArray === [["John", 23]]
var removedFromMyArray = myArray.shift(); //delete first element from myArray, and = it to removedFromMyArray
myArray.unshift(["Paul", 35]); //create a element at start of array
console.log(amount);				// 215.9784
console.log(amount.toFixed(2));	// "215.98"

var SOME_THING = 21; //Constant
const NEXT_THING = 21; //Constant in ES6

// variable within a function without var === global variable  global = 5;

function timesFive(num) {  //return number multiplied by 5
  return num * 5;
}
result = timesfive(3);

const TAX_RATE = 0.08;
function calculateFinalPurchaseAmount(amt) {
	amt = amt + (amt * TAX_RATE);
	return amt;
}
var amount = 99.99;
amount = calculateFinalPurchaseAmount(amount);
console.log( amount.toFixed(2));	

//while
while (amount<bank_balance){
  amount = amount + PHONE_PRICE;
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}

//Example of implicit coercion:
var a = "42";
var b = a * 1;	// "42" implicitly coerced to 42 here
a;				// "42"
b;				// 42 -- the number!


var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
a == c;		// true
b == c;		// true
a == b;		// false  wtf


var a = 2;
foo();					// works because `foo()`
						// declaration is "hoisted"
function foo() {
	a = 3;
	console.log( a );	// 3
	var a;				// declaration is "hoisted"
						// to the top of `foo()`
}
console.log( a );	// 2

function foo() {
	var a = 1;
	function bar() {
		var b = 2;
		function baz() {
			var c = 3;
			console.log( a, b, c );	// 1 2 3
		}
		baz();
		console.log( a, b );		// 1 2
	}
	bar();
	console.log( a );				// 1
}
foo();


var a = 42;
var b = (a > 41) ? "hello" : "world";
// similar to:
// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }


// IIFE
(function sum(a, b) {
    console.log(a + b); // 5
})(2, 3);

var result = (function(a, b) { 
    return a + b;
})(2, 5);

var a = 42;
(function IIFE(){
	var a = 10;
	console.log( a );	// 10
})();
console.log( a );		// 42

//
// ────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: M O N I P U L A T I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//
var a = document.querySelector('.some__class');
a.classList.add('another__class');
a.classList.remove('another__class');
a.classList.toggle('another__class'); // if class exist then remove, if not, add
a.classList.replace('oldClass', 'newClass');
a.classList.contains('oldClass');// ckeck if class exist
querySelector //Returns the first matching Element node
querySelectorAll //Returns a NodeList containing all matching Element