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
//https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript

function countSheep(num) {
  var final = ''
  for (var i = 1; i <= num; i++) {
    var frase = i + ' sheep...'
    final += frase
  }
  return final
}

var result1 = countSheep(6)
console.log(result1)
/*************************************************
 *                   Problem 10
 *************************************************/

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  var separado = dna.split('')
  var nuevo = dna.replace(/T/g, 'U')
  return nuevo
}

/*************************************************
 *                   Problem 11
 *************************************************/

//https://www.codewars.com/kata/return-the-day/train/javascript

function whatday(num) {
  var text = ''
  switch (num) {
    case 1:
      text = 'Sunday'
      break
    case 2:
      text = 'Monday'
      break
    case 3:
      text = 'Tuesday'
      break
    case 4:
      text = 'Wednesday'
      break
    case 5:
      text = 'Thursday'
      break
    case 6:
      text = 'Friday'
      break
    case 7:
      text = 'Saturday'
      break
    default:
      text = 'Wrong, please enter a number between 1 and 7'
  }

  return text
}

var problem1 = whatday(5)
console.log(problem1)

/*************************************************
 *                   Problem 12
 *************************************************/

//https://www.codewars.com/kata/will-there-be-enough-space/train/javascript

function enough(cap, on, wait) {
  var noEntran
  var capacidad = cap - on
  if (capacidad < wait) {
    noEntran = wait - capacidad
  } else {
    noEntran = 0
  }
  return noEntran
}

/*************************************************
 *                   Problem 13
 *************************************************/

//https://www.codewars.com/kata/remove-first-and-last-character/train/javascript

function removeChar(str) {
  var final = str.slice(1, -1)
  return final
}

/*************************************************
 *                   Problem 14
 *************************************************/

//https://www.codewars.com/kata/third-angle-of-a-triangle/train/javascript

function otherAngle(a, b) {
  return 180 - a - b
}

/*************************************************
 *                   Problem 15
 *************************************************/

//https://www.codewars.com/kata/makeuppercase/train/javascript

function makeUpperCase(str) {
  return str.toUpperCase()
}

/*************************************************
 *                   Problem 16
 *************************************************/

//https://www.codewars.com/kata/count-the-monkeys/train/javascript

function monkeyCount(n) {
  var numbers = []
  for (var i = 1; i <= n; i++) {
    numbers.push(i)
  }
  return numbers
}

/*************************************************
 *                   Problem 17
 *************************************************/

//https://www.codewars.com/kata/beginner-reduce-but-grow/train/javascript

function grow(x) {
  var number = 1
  for (var i = 0; i < x.length; i++) {
    number = x[i] * number
  }
  return number
}

/*************************************************
 *                   Problem 18
 *************************************************/

//https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(Math.floor(time) * 0.5)
}

/*************************************************
 *                   Problem 19
 *************************************************/

//https://www.codewars.com/kata/remove-string-spaces/train/javascript

function noSpace(x) {
  return x.replace(/\s/g, '')
}

/*************************************************
 *                   Problem 20
 *************************************************/

//https://www.codewars.com/kata/convert-a-number-to-a-string/train/javascript

function numberToString(num) {
  return num.toString()
}

/*************************************************
 *                   Problem 21
 *************************************************/

//https://www.codewars.com/kata/convert-a-string-to-a-number/train/javascript

var stringToNumber = function(str) {
  return Number(str)
}

/*************************************************
 *                   Problem 22
 *************************************************/

//https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number/train/javascript

function divisibleBy(numbers, divisor) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      result.push(numbers[i])
    }
  }
  return result
}

/*************************************************
 *                   Problem 23
 *************************************************/

//https://www.codewars.com/kata/how-many-lightsabers-do-you-own/train/javascript

function howManyLightsabersDoYouOwn(name) {
  if (name === 'Zach') {
    return 18
  } else return 0
}

/*************************************************
 *                   Problem 24
 *************************************************/

//https://www.codewars.com/kata/how-good-are-you-really/train/javascript

function betterThanAverage(classPoints, yourPoints) {
  var total = 0
  for (var i = 0; i < classPoints.length; i++) {
    total += classPoints[i]
  }

  if (total / classPoints.length < yourPoints) {
    return true
  } else {
    return false
  }
}

/*************************************************
 *                   Problem 25
 *************************************************/

//https://www.codewars.com/kata/square-n-sum/train/javascript

function squareSum(numbers) {
  var total = 0
  for (var i = 0; i < numbers.length; i++) {
    total += Math.pow(numbers[i], 2)
  }
  return total
}

/*************************************************
 *                   Problem 26
 *************************************************/

//https://www.codewars.com/kata/find-out-whether-the-shape-is-a-cube/train/javascript

var cubeChecker = function(volume, side) {
  if (volume <= 0 || side <= 0) {
    return false
  }
  if (volume / side === side * side) {
    return true
  } else {
    return false
  }
}

/*************************************************
 *                   Problem 27
 *************************************************/

//https://www.codewars.com/kata/sum-mixed-array/train/javascript

function sumMix(x) {
  var total = 0
  for (var i = 0; i < x.length; i++) {
    total += Number(x[i])
  }
  return total
}

/*************************************************
 *                   Problem 28
 *************************************************/

//https://www.codewars.com/kata/how-many-stairs-will-suzuki-climb-in-20-years/train/javascript

function stairsIn20(stairs) {
  var total = 0
  var newArr = []
  for (var i = 0; i < stairs.length; i++) {
    for (var j = 0; j < stairs[i].length; j++) {
      newArr.push(stairs[i][j])
    }
  }
  for (var i = 0; i < newArr.length; i++) {
    total += newArr[i]
  }
  return total * 20
}
