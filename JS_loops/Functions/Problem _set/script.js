
function isEven(num) {
    if (num % 2 === 0) {
        console.log("True");
        return true
    } else {
        console.log("False");
        return false;
    }
}

function factorial(num) {
    var x = 1;
    for(var i =1 ; i<= num;i++){
        x*=i;
    }
    console.log(x);
     return x;
}

function kebabTosnake(kebab){
    var snake = kebab.replace(/-/gi,"_");
    console.log(snake);
    return snake;
}

isEven(6);
isEven(5);

factorial(5);
factorial(0);

kebabTosnake("Hello-world");
kebabTosnake("Hello-world-Bitches");
kebabTosnake("word");




