var userAge = prompt("what is your age?");

if (userAge < 18){
    alert("you cannot enter venue");
    console.log("you cannot enter venue")
}else if(userAge < 21){
    alert("you can enter but cannot drink");
    console.log("you can enter but cannot drink")
}else{
    alert("You may enter and drink");
    console.log("You may enter and drink")
}