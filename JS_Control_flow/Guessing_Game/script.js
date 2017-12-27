var secretNum = 5;
var userGuessString = prompt("Guess a number?");
var userGuess = Number(userGuessString);

if (userGuess === secretNum){
    alert("Correct!")
}else if (userGuess > secretNum){
    alert("Lower!");
}else {
    alert("Higher");
}




// if (userGuess < 0){
//     alert("Invalid Entry");
//     console.log("Invalid Entry")
// }else if (userGuess < 18){
//     alert("you cannot enter venue");
//     console.log("you cannot enter venue")
// }else if(userGuess < 21){
//     alert("you can enter but cannot drink");
//     console.log("you can enter but cannot drink")
// }else{
//     alert("You may enter and drink");
//     console.log("You may enter and drink")
// }
// if(userGuess === 21){
//     alert("Happy 21st Birthday!");
//     console.log("\"Happy 21st Birthday!\"")
// }
// if (userGuess % 2 !== 0){
//     alert("Your age is odd");
//     console.log("Your age is odd")
// }
// if (userGuess % Math.sqrt(userGuess) === 0) {
//     alert("Perfect square!");
//     console.log("Perfect square!");
// }
