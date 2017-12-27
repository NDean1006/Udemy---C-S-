
var userAge = Number(prompt("what is your age?"));
if (userAge < 0){
    alert("Invalid Entry");
    console.log("Invalid Entry")
}else if (userAge < 18){
    alert("you cannot enter venue");
    console.log("you cannot enter venue")
}else if(userAge < 21){
    alert("you can enter but cannot drink");
    console.log("you can enter but cannot drink")
}else{
    alert("You may enter and drink");
    console.log("You may enter and drink")
}
if(userAge === 21){
    alert("Happy 21st Birthday!");
    console.log("\"Happy 21st Birthday!\"")
}
if (userAge % 2 !== 0){
    alert("Your age is odd");
    console.log("Your age is odd")
}
if (userAge % Math.sqrt(userAge) === 0) {
    alert("Perfect square!");
    console.log("Perfect square!");
}
