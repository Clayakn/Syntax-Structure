// Data Type 
Boolean 
null 
undefined
number 
string
object 
array 
function

// Creating a new variable 
var variableName; 
var myName = "Andrew";
// Variables can contain number, string, boolean, object, array 
let variableName; 
const variableName; 
// Use let and const instead of var

// Primitive 
"String" // Strings
9 // Numbers

// Escaping 
'We don\'t do that stuff' // Blacklash on single quotes to not break early

// Reference Types 
// Also known as pointer, something references to specified item
[] // Arrays 
{} // Objects
// Statement (End in semicolon)
console.log("Hi there"); 

// Expression 
5 + 3 

// Strings
"Hello"
`My favorite food is ${food}` // String Template Literal, can place variables in strings
// Operators 
+ // Addition
- // Subtraction
* // Multiplication
** // Exponential
/ // Division
!work //Bang Operator (NOT operator), gives inverse of expression

//Concatenation
var myName = "Cory";
var attrib = " can code."; 
myName + attrib 
>> "Cory can code."

// Modulus (Remainder)
2%2===0 // Even Number
5%2===1 // Odd Number 

// Assignment Operators 
= 
+=, -=, *=, /= 
var = var + 5 
var += 5 // Shortcut
++ // Increment
-- // Decrement
5++; 

// Comparison Operator 
>, < 
>=, <= 
== 
=== // Equal in value and type
!= // Not Equal 

// Logical Operator, Evaulation between two Expression
&& // logical 'and' 
|| // logical 'or' 
! // bang operator 'not'

// Short Circuit Operator 
if (d && c) console.log(true) 
// If d is false, computer stops at d, not need to evalulate more

// Operator precedence 
a || b && c // && evaluated first then ||

// Ternary operator 
conditional ? truthy case : falsy case; 
// Not good if truthy case has multiple line of code
let num =  3 > 6 ? 3 : 6 
// num = 6
// (3 > 6 ? 3 : 6) is an expression

// Conditionals 
if (){}; // if (Condition) {action};

// Additonal Conditonals 
if (){}
else if (){} 
else {}; 

// Nested  Conditionals 
if (){
    if (){} 
};

// Functions
function marvelCaptainAmerica(){}; // function name(inputs){action};
marvelCaptainAmerica(); // Calling function

// Truthy 
'0' 
[] 
{}
'false'

// Falsy 
0 
'' or "" // Spaces counts as something inside string
null 
undefined 
NaN 
false

// Logging something unto the console 
console.log();

// Scope 
// Global scope, local scope (can only look up), Child function can access parent and grandparent function but not vice versa

// Lexical Scope (Static Scope), every inner level can access its outer levels
// Scopes unaffected by Ifs and Fors, only for functions 

// Let 
// let can be used in place of var to simulate block scoping in Javascript
// Applies block scope, scope is defined by any code block (not only functions but also if statements and for loops) 
if (true){let num = 12;} // only access num within {} 

// Const
const variableName; // Const cannot be reassigned


// Length 
array.length // returns number of elements in array (Can be used on strings as well)
array.length = 3 // Set length of array

//Objects 
var person = {firstName: "Cory",lastName:"Johnson"}; // var objName = {key:value,key:value};
// Shape of person is firstName and lastName
person.firstName // Calling data from object
person.email = "coryjohnson12@gmail.com" // Adding key:value pairs into object
person['email'] // Bracket Notation
person[0]['email'] // Access array in object that has email property
person[email] // Access variable named email

// Object.assign 
const newObject = Object.asign({},oldObject)// Object.assign merges any number of 'source' objects into a single 'target' object
const newObject = Object.asign({},oldObject,{four:4})// Add property four along with adding oldObject
const newObject = Object.asign({},oldObject1,oldObject2,oldObject3) // Merge all oldobjects into one new object

// Object Destructuring 
let {one,two,three} = objToDestructure; // Syntax Structure
function writeStuff({name, favoritePhrase}) {
    console.log(name); 
    console.log(favoritePhrase);
}  
writeStuff(yessa);
// Using a function which passes an obj as a parameter

// Methods 
// A method is a function insie an object
var basicMath = {add:function(num1,num2){return num1 + num2;},};// var objName = {funcName: function(){code},};
basicMath.add(4,3) // objName.methName(arguments);
>> 7 

string.startsWith(); // determins whether a string beings with a character of a specificed string

// Return 
function addition(x,y){return x + y;}; // function name(only way to put in info) {only way to get info out w/ return statement} 

// Array 
var pets = ["Dog","Cat"]; // var arrayName = [value1,value2];
// Accessing element in array with index 
pets[0]; >> "Dog" // arrayName[key] >> value 
pets[2] = "Lizard" // Adding data into array

// Methods on Array 
Array.pop(); // Takes away last element in array and return it
var lastElement = myArray.pop(); // Puts last element into variable lastElement, myArray is altered accordingly  

Array.shift(); // Remove first element and returns it then shifts everything in array to the left
var removedItem = myArray.shift(); // Puts first elmeent into variable removedItem, myArray is altered accordingly

Array.splice(0,1); // Removes elements within an array and returns it, myArray.splice(index to start,how many items to pull out of array)
myArray.splice(3,0,"Joey";) // Can add elements into array at certain index, myArray.splice(3,0,"Joey") = start at index 3, remove 0, add Joey at index 3
var removedItem = myArray.splice(0,1); // Returns spliced values into variable removedItem, myArray is altered accordingly

Array.slice(); // Takes entire array and makes copy of it 
var entireArray = myArray.slice(); // returns a copy of specified portion, does not modify original array
var lastThreeCopy = myArray.slice(3); // Can give starting index (3) and puts all the values after starting index (including starting index) into variable lastThreeCopy
var middleThreeCopy = myArray.slice(2,5); // Start on index 2 and end at index 5 (Not including index 5)

Array.indexOf(); 
var fruits = ['apple','banana','cherry','apple']; 
var bananaPlace = fruits.indexOf('banana');
bananaPlace; >> 1 // Gives back index of value
var bananaPlace2 = fruits.indexOf('Banana');
bananaPlace2; >> -1 // If cannot find value then returns -1 
var applePlace = fruits.indexOf('apple'); 
applePlace; >> 0 // Only gives back first occurrence of value 

Array.forEach(); // Another way of doing for loop
var ages = [53,50,29,22,16]; 
ages.forEach(function(val){val + 1;}); // .forEach performs a function unto each value within an array, does not return the value
console.log(ages); >> [53,50,29,22,16];
ages.forEach(function(val,i,arr){arr[i] = val + 1;}); // Return value by using arr
console.log(ages); >> [54,51,30,23,17];

Array.map(); 
var ages2016 = [53,50,29,22,16]; 
var ages2017 = ages2016.map(function(element){return element + 1;}); // Works like forEach but returns the value
ages2017; >> [54,51,30,23,17] // Transformed copy of the original 
arr.map (function(element,index,array){}) // Syntax Structure

Array.filter(); 
var names  = ['Suzie','Ben','Mark','Franklin']
var shortNames = names.filter(function(val,i,arr){
    return val.length < 5; 
}) // .filter determines if piece of array passes condition (trust or false), if true then adds into new empty array called shortNames
shortNames; >> ['Ben','Mark'] // Original array is unmodified when using filter 
arr.filter(function(element,index,array){})) // Syntax Structure

function checkAge(array){
    var emptyArray = [];
    for (var i =0;i<array.length;i++){
        if (array[i] > 18){
        emptyArray.push(array[i])
        };
    };
    return emptyArray;
};

var checkAge = array.filter(function(val){return val > 18;}); //this line of code is the same as function above, that is how .filter is created

Array.push(); 
var fruits = ['Banana','Orange'];
fruits.push('Kiwi'); 
fruits; >> ['Banana','Orange','Kiwi'] // .push adds new items to the end of an array and returns the new length 

Array.unshift(); 
var flowers = ['Bloodroot','Lavender'];
flowers.unshift('Morning Glory'); 
flowers; >> ['Morning Glory','Bloodroot','Lavender'] // .unshift adds new items to the beginning of an array and returns the new length

Array.reduce();
var numbers = [1,2,3,4];
var total = numbers.reduce(function(num1,num2){return num1 + num2;},0); // var newArray = array.reduce(function(total,currentValue){action}, initial value);
total; >> 10 // .reduce condenses all values in an array into one value
arr.reduce(function(accumulator, value, index, array){}), 0) // Syntax Structure

Array.sort(); 
var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];
workplaceAccidents.sort(function(a, b){return a - b}); // Sort numbers in array in order from a to b, least to greatest

// Loops 
for (i=0;i<array.length;i++){}; // for (initial; condition; increment) {action}; Action will perform until condition is false
for (i in obj) {}; // for (property in object) {action}; for/in loop for object
for(let i = array.length - 1; i > 0; i--) {} // Looking through an array backwards, good for deleting values in an array

// Arrow function 
var xVariable = x => 7; // By default, arrow function will return what after the arrow
var myFunction = (num1,num2) => {return num1 + num2;}; // var functionName = (paramters) => {action};
var newArray = array.filter((item)=> item === "John";); // Prototypes such as .filter can use arrow function as well
// Arrow functions do not change the JavaScript context ('this' keyword)

// Callback functions 
function getUserInfo (firstName,lastName,callback){
    var name = firstName + ' ' + lastName; 
    return callback(name);
};
function greetUser(){
    return "Hello, "+name+'!';
}
getUserInfo('Andrew','Nam',greetUser) //greetUser is a callback function used in this instance
>> "Hello, Andrew Nam!"

// Class 
class Tree { // Create new class with 'class' keyword and name of class is capitalized
    constructor(height) { // constructor is the entry point of class Tree which contain paramters to be used, costructor(parameters)
        this.height = height; // 'this' is used as an object belonging in same class, obj.key = value;
        this.food = "photosynthesis"; // this line of code is known as an object property
    }
    grow(){ //functions can be created within a class so that all classes of same name can use it
        this.height++;
    }
}
var oak = new Tree(10); // Instance of Tree in variable oak
oak; >> {height:10,food:'photosynthesis'} Prototype: grow:[function]
oak.grow(); >> {height:11}
