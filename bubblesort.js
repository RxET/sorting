var counter = 0;

function bubbleSort(array){
    var swap;
    do {
        swap = false;
        for (var i=0; i<array.length-1; i++){
            if (comparison(array,i)){
                swapFunc(array, i)
                swap = true;
            };
        };
    } while (swap);
    console.log(counter)
    return array;
}

function swapFunc(array, i){
    var temp = array[i];
    array[i] = array[i+1];
    array[i+1] = temp;
    counter++;
}

function comparison(array, i){
    return array[i] > array[i+1]
}

console.log(counter)