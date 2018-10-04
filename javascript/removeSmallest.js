let arr1 = [1,2,3,4]
let arr2 = [4,3,7,1]
let arr3 = [1,-1,-2,2,-2]

const removeSmallest = function(arr) {
  // let result = Math.min.apply(Math, arr)
  // console.log(result)
  let index = 0
  let value = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < value) {
      value = arr[i]
      index = i
    }
  }
// below splice works but it mutates the array so I can't use it
  // arr.splice(index, 1)
// I am going to look into using filter, which should allow me to remove without
// mutating thr
console.log(arr)
console.log(index)
const notBorringArr = arr.filter(arr => arr !== arr[index])


  console.log('the value is ', value)
  console.log('the index is ', index)
  console.log(notBorringArr)
  return arr

}

removeSmallest(arr3)
// removeSmallest(arr2)
// removeSmallest(arr1)
