function split(wholeArray) {
    var isOdd = wholeArray.length % 2;
    var dividingPoint = wholeArray.length/2;

    if (isOdd === 1) {
        dividingPoint = Math.trunc(dividingPoint);
    }

    var firstHalf = wholeArray.slice(0, dividingPoint);
    var secondHalf = wholeArray.slice(dividingPoint);

    // merge(firstHalf, secondHalf);
    return [firstHalf, secondHalf];
  }

  function merge(arr1, arr2) {
    var sorted = [];

    while (arr1.length && arr2.length) {
        // if (arr1.length && arr2.length) {  
            if (arr1[0]<arr2[0]) {
                sorted.push(arr1.shift());
            }
            sorted.push(arr2.shift());
        // }
    }
    if (arr1.length > arr2.length) {
        sorted = sorted.concat(arr1);
    } else {
        sorted = sorted.concat(arr2);
    }
    // console.log(sorted);
    return sorted;
  };

function mergeSort (array) {
    
    var final = [];

    if (array.length === 1) {
        return array;
    }
    //if return values from split have length of 1 good
    //otherwise call split again and merge sort
    //merge combined
    return final;
}