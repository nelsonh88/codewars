class SmallestIntegerFinder {
  findSmallestInt(args) {

  }
}

let arr1 = [34, 15, 88, 2]
let arr2 = [34, -345, -1, 100]
Array.min = function( array ){
    return Math.min.apply( Math, array );
}

let minimum = Array.min(arr2)
  console.log(minimum)
