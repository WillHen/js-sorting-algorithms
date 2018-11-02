function insertionSort(array) {
    // First we iterate through the array. We set variable i to
    // 1 as the first item of the array does not proceed anything so it cannot be sorted.
    for (var i = 1; i < array.length; i++) {
        // We start the inner loop at 0 and continue the iteration until it j is equal to i.
        // We don't want to go beyond i as i acts as our "key". In the inner loop
        // we are scanning items left to right to see where that key would go.
        // If we find the key is less than an item to it's left (during the inner loop),
        // then we know we need to insert the key at that position to sort the array.
        for (var j = 0; j < i; j++) {
            // if the item currently at the outer loop is
            // less than the item i the inner loop
            // (the item to it's left) then we know
            // the item at array[i] needs to go before the item
            // at array[j]. We splice out the item at i position
            // and add it in at the index of j. This maintains the integrity of the
            // array.
            if (array[i] < array[j]) {
                var temp = array.splice(i, 1);
                array.splice(j, 0, temp[0]);
                break;
            }
        }
    }
    return array;
}

