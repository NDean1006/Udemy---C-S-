var arr = [1,2,3,4,5];
var brr = [5,4,3,2,1];
var arr2 = [1,2,3,4,5];

console.log("problem 1");
printReverse(arr);

console.log("problem 2");
isUniform(arr,brr);
isUniform(arr,arr2);

console.log("problem 3");
sumArray(arr);

console.log("problem 4");
maxArray(arr);

function printReverse(arr) {
    for (var i = arr.length -1;i>=0;i--){
        console.log(arr[i]);
    }
}

function isUniform(arr, brr) {
    var msg = "True";
    for (var i = 0;i< arr.length;i++){
        if (arr[i] !== brr[i]){
            msg="False"
        }
    }
    console.log(msg);

}

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function (i){sum += i});
    console.log(sum);
}
function maxArray(arr) {
    var max = [0];
    arr.forEach(function (i){
        if (arr[i]>max){
            max=arr[i];
        }
    });
    console.log(max);
}