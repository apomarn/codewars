/*************************************************
 *                   Problem 1
 *************************************************/

//Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str) {
  let words = str
    .split(' ')
    .reverse()
    .join(' ')
  return words
}

reverseWords('The greatest victory is that which requires no battle')
// should return "battle no requires which that is victory greatest The"

/*************************************************
 *                   Problem 2
 *************************************************/

/*Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects. This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above); This function should return a number (final grade). There are four types of final grades:
100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases*/

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100
  if ((exam > 75) & (projects >= 5)) return 90
  if ((exam > 50) & (projects >= 2)) return 75
  return 0
}

finalGrade(100, 12) // 100
finalGrade(99, 0) // 100
finalGrade(10, 15) // 100

/*************************************************
 *                   Problem 3
 *************************************************/

//Given an array of integers, return a new array with each value doubled.

function maps(arr) {
  return arr.map(x => x * 2)
}

maps([1, 2, 3]) //[2, 4, 6]

/*************************************************
 *                   Problem 4
 *************************************************/

// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

even_or_odd(2) // Even

/*************************************************
 *                   Problem 5
 *************************************************/

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8
  } else {
    return number * 9
  }
}

simpleMultiplication(2) // 16

/*************************************************
 *                   Problem 6
 *************************************************/

// https://www.codewars.com/kata/cat-years-dog-years/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0
  let dogYears = 0

  if (humanYears === 1) {
    catYears = humanYears * 15
    dogYears = humanYears * 15
  } else if (humanYears === 2) {
    catYears = 15 + 9
    dogYears = 15 + 9
  } else if (humanYears > 2) {
    catYears = (humanYears - 2) * 4 + 24
    dogYears = (humanYears - 2) * 5 + 24
  }
  return [humanYears, catYears, dogYears]
}

humanYearsCatYearsDogYears(10) // [10, 56, 64]

/*************************************************
 *                   Problem 7
 *************************************************/

//www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript
function abbrevName(name) {
  var mayuscula = name.toUpperCase()
  var separadoMayuscula = mayuscula.split(' ')
  return separadoMayuscula[0][0] + '.' + separadoMayuscula[1][0]
}

var resultado = abbrevName('patrick Feenan')
console.log(resultado)

/*************************************************
 *                   Problem 8
 *************************************************/
//www.codewars.com/kata/sum-of-positive/train/javascript

function positiveSum(arr) {
  var sumaNumeros = 0
  for (var i = 0; i < arr.length; i++) {
    var arrValue = arr[i]

    if (arrValue > 0) {
      sumaNumeros += arrValue
    }
  }

  return sumaNumeros
}

var resultado1 = positiveSum([1, 2, 3, 4, 5])
console.log(resultado1)

/*************************************************
 *                   Problem 9
 *************************************************/

/*************************************************
 *                   Problem 10
 *************************************************/

/*************************************************
 *                   Problem 11
 *************************************************/
