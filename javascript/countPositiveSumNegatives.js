const arr1 = [1, 2, 3, -4, -5, -6]
const arr2 = 'hello'
const arr3 = []
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

let positiveNumbers = []
let negativeNumbers = []
let notAnArray = []
let answerArray = []


const countPositivesSumNegatives = function (input) {
  const positiveMath = function () {
    return positiveNumbers.length

  }
  // positiveMath()

  const negativeMath = function () {
    return negativeNumbers.reduce((a, b) => a + b, 0)
  }

  // negativeMath()

  if (Array.isArray(input) && input.length > 0) {
      for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
        positiveNumbers.push(input[i])
      } else {
        negativeNumbers.push(input[i])
        }
      }
      answerArray.push(positiveMath())
      answerArray.push(negativeMath())

  } else {
    return notAnArray
  }
}

countPositivesSumNegatives(arr3)
// console.log(answerArray)
