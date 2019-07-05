/*************************************************
 *                   Problem 1
 *************************************************/

//https://www.codewars.com/kata/exes-and-ohs/train/javascript

function XO(str) {
  var x = 0
  var o = 0
  var word = str.toLowerCase().split('')
  for (var i = 0; i < word.length; i++) {
    if (word[i] === 'x') {
      x += 1
    } else if (word[i] === 'o') {
      o += 1
    }
  }

  if (x === o) {
    return true
  } else {
    return false
  }
}
