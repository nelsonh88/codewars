let word = '1234'

const stringToNumber = function(str){
// The second argument in parseINt is called a radix. For our case it
// should always be 10
  let number = parseInt(str, 10)
console.log(number)
  return number;
}

stringToNumber(word)
