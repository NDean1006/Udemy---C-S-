var nums =[45,65,72,100];
var colors =["orange","red", "violet","Green","Yellow"];

Array.prototype.myForEach = function (func) {
    for (var i = 0; i < this.length; i++){
        func(this[i]);
    }
};

function myForEach(arr, func){
    for (var i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}

myForEach(colors,function (color) {
    console.log(color);
});

nums.myForEach(function (num) {
    console.log(num);
});