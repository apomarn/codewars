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

/*************************************************
 *                   Level 8 Problem 2
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
