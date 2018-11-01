//Time complexity: О(n2) (quadratic).

function bubbleSort(array) {
    var arrayLength = array.length;

    // Base case: if the array's length is one or less
    // we do not need to sort.
    if (arrayLength <= 1) {
        return array;
    }

    // First loop through the array.
    for (var i = 0; i < arrayLength; i++) {
        // With each iteration of the outer loop, loop through the array again.
        // With each element, we check if the element at i (the outer loop iteration)
        // is greater than the current element of the inner loop iteration (j);
        // If it is, we want to move that element to right and towards the end of the array.
        // Therefore it is "bubbling" up the array.
        for (var j = i + 1; j < arrayLength; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

