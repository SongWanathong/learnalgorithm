function findDuplicateNumber(arr) {
    const checker = {};
    for (let i = 0; i < arr.length; ++i) {
        if (checker[arr[i]]) return arr[i];
        checker[arr[i]] = true;
    }
    return -1;
}