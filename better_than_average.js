function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    var avg = 0;
    var newArr = [];
    // calculate the average
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    // count how many values are greater than the average
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4