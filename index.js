/*************************************************
 *                   Level 8 Problem 1
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
