function mergeSort(array) {
  // base case to end recursion
  if (array.length <= 1) return array;

  // locate middle to split array in half
  var middle = Math.floor(array.length / 2);

  // split array in two
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // recursively merge left and right
  return merge(mergeSort(left), mergeSort(right));
}

// helper function to merge two sorted arrays
function merge(left, right) {
  // temp variables for keeping track of where we are and building sorted array
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  // add values to result in ascending order by iterating through all of left and right elements
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]); // push element and then move left cursor along one
    } else {
      result.push(right[rightIndex++]); // push element and then move right cursor along one
    }
  }

  // concatenate as there will be at least one element remaining from left or right once the either index hits the end (can use ES6 spread operator syntax)

  // return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

console.log(mergeSort([2, 4, 7, 8, 4, 6, 1]));
// console.log(merge([1, 2, 3, 4], [5, 6, 7, 8]));
