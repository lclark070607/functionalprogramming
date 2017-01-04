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

//If Number is evenly divisible by num 1 & num 2, print that number

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


// let divisorArray = range(1, 100);
// // console.log(divisorArray);
// divisorArray.indexOf(num / )

// let Number = 
// function modulus(number);

//     if (number % = 0;)
//     return true;
//     }

// function multiples(num1, num2) {
//     let num1 = displayArray.
//     if(number % num1 === 0)
//     if (number & num2 === 0)
//     return true;

//     divisorArray.length
//     divisorArray

// }



















// 02 | divisors

// Write a function called divisors that accepts a number and 
// returns an array of all of the numbers that divide evenly into it.

//Steps:
//write function for divisors that returns an array
//use map to apply the division

// let divisorArray = [];

// function divisors(num) {



//     return num / number === .toFixed(0);



//     if num / number  === num.toFixed(0)
//     .push(divisorArray)
// }

// let divisorArray = 
// console.log(divisorArray)

//BOOST
//boost(48)
//1. Convert 48 to [4, 8] -- suggestion: convert to string, then split, then parseInt 
//2. Increment all the digits (or go back to 0 if its a 9)
//3. Recombine them with join()
//parseInt('14') // logs 14

// function boost(num) {
//     function parse()
//     num.soString().split('') //note:  array of STRINGS)
// }


// function boost(num) {}


// function increment(num) {
//     if (num < 9) {
//         num = num + 1;
//     } else {
//         if (num === 9) {  //single equal means set num = to 
//             num = 0;
//         }
//     }
//     return num;
// }

// function boost(num) {
//     function parse(single) {
//         return parseInt(single);
//     }

// let digits = num.toString().split('') //note:  array of STRINGS
// digits = digits.map(parse);
// }
// digits = digits.map(parse);
// }


// boost(5629)

// boost(num)
// // 1.  5629  [5,6,2,9]
// // [6,7,3,0]
// // 6730

// num.toString().split()

function boost(num) {
      function parse(single) {
    return parseInt(single);
      }

function increment(single) {
    if(single < 9) {
        return single + 1;
    } else {
        return 0;
    }
}

    let digits = num.toString().split('');
    return parseInt(digits.map(parse).map(increment).join(''));
}

console.log(boost(5629)); //6730