function sortArrayDescending(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
}

const arr = [5, 2, 8, 1, 4];
console.log("Original array:", arr);
sortArrayDescending(arr);

console.log("Sorted array in descending order:", arr);
