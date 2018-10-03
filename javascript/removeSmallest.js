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
      // arr.splice(index, 1)

    }
  }
  console.log('the value is ', value)
  console.log('the index is ', index)
// console.log(arr)

}

removeSmallest(arr3)
removeSmallest(arr2)
removeSmallest(arr1)
