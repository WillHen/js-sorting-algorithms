//Time complexity: О(n2) (quadratic).

function selectionSort(array) {
    var arrayLength = array.length;

    // Base case: if the array's length is one or less
    // we do not need to sort.
    if (arrayLength <= 1) {
        return array;
    }

    // First loop through the array.
    for (var i = 0; i < arrayLength; i++) {
        // With each iteration of the outer array, loop through it again.
        // Check if the current element at j (the inner loop) is
        // less than i (the current element of the outer loop).
        // If that is the case, we swap them, therefore moving the lower element to the
        // beginning of the array.
        // We then continue through the loop. If we find another element which is lower
        // than the element we swapped in the outer loop, we swap them again. Therefore ensuring
        // on the first iteration of the inner loop the lowest element will be at the start of the
        // outer array (array[0]).
        // we repeat the process again, so on the second iteration of the outer loop, once the inner
        // loop is complete the second lowest element will be at position array[1] of the outer array.
        for (var j = i + 1; j < arrayLength; j++) {
            if (array[j] < array[i]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}
