// console.log('here we go');

// // 01 | containsVowel

// // Write a function called containsVowel that takes a single string and 
// // returns true if there is at least one value or false otherwise.

// function isVowel(letter) {
//     //Option 4: filter array of vowels to see if any match 'letter'
//     if (['a', 'e', 'i', 'o', 'u'].filter(isLetter).length > 0) {
//     //Option 3:  includes
//     if(['a', 'e', 'i', 'o', 'u'].includes(letter)){
//     //Option 2:  see if the letter is an array containing all vowels
//     // if(['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1) { //!== -1 means it's nothing, returns a -1
//     //OPTION 1:  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }


// //return boolean
// function containsVowel(word) {
// let letters = word.split('');//this converts it into an array
// //1. break the word into letters (split)
// // 2. find out which of those letters are vowels
// //3. if on or more are, return true

// // return letters.length>0;// not right, this return true

// return letters.filter(isVowel).length > 0;
// }
// console.log(containsVowel('hey'));  //filter this array for vowels

// 04 | multiples

// Write a function called multiples that accepts two numbers
// and returns an array of all numbers from 1 - 100 that are 
// evenly divisible by both.

//1. start with an array 1 -100 (range)
//2. keep things divisible by first and second, discard the rest (filter)

function range(min, max) {
    let arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i);
    }

    return arr;
}

function multiples(first, second) {
    function isDivisible(current) {
        return (current % first === 0) && (current % second === 0);
    }
    //One version
    let nums = range(1, 100).filter(isDivisible);
    //or
    //anonymous version
    // let nums = range(1,100).filter(function(current) {
    //     return current % first === 0;
    // });
    return nums;
}
console.log(multiples(5, 7));


// 02 | divisors

// Write a function called divisors that accepts a number and 
// returns an array of all of the numbers that divide evenly into it.

function range(min, max) {
    let arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i);
    }

    return arr;
}

function divisors(current) {
    let array = range(1, current);
    return array;
}
//I need to divide current by every number in the array
function isDivisible(num) {
    return num % divisors(current).length === 0
}
// console.log(isDivisible(100));
// return current % array.length === 0
let newArray = range(1, current).filter(isDivisible);
return newArray;



console.log(divisors(100));

//03 Boost

// Write a function called boost that accepts a number as a parameter and 
// increments all of the digits of the number individually. 
// If the digit is 0-8, it should be incremented, 
// but if its 9 then it should be reset to 0. Return the incremented number.

//1. Convert 48 to [4, 8] -- suggestion: convert to string, then split, then parseInt 
//2. Increment all the digits (or go back to 0 if its a 9)
//3. Recombine them with join()

function boost(num) {
    function parse(single) {
        return parseInt(single);
    }

    function increment(single) {
        if (single < 9) {
            return single + 1;
        } else {
            return 0;
        }
    }

    let digits = num.toString().split('');
    return parseInt(digits.map(parse).map(increment).join(''));
}

console.log(boost(5629)); //6730

function filter(array) {
    for (let i = 0; i < array.length; i++) {
        let answer = [];
        //I'm going to do an action to every element in the array
         //I'm going to create a new array
        let newAnswer = [];
        //I'm going to create a new array
//I know I'm going to want to use array.push in here
    }
}

//not quite but not a blank screen so there's that.  :)

function map(action, array) {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        function addFive(n) {
            return n + 5
        }
        let action = addFive(6)
        
  return answer;
}
       console.log( map(addFive(6), answer));
    
