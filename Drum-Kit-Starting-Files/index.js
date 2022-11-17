// 1. Eventlistener using function declared outside
// document.querySelector("button").addEventListener("click",handleClick);  // using handleClick() -> this will alert without click event

// function handleClick(){
//     alert("I got clicked!");
// }

//2. Eventlistener using anonymous function
// document.querySelector(".drum").addEventListener("click",function (){
//     alert("I got clicked!");
// });

//Target all buttons

// Detecting Buttoon Press

var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        var drumKey = ["w","a","s","d","j","k","l"];
        if(drumKey.includes(buttonInnerHTML)){
            buttonAnimation(buttonInnerHTML);
        }
    });
}

// Detecting Keyboard Press

document.addEventListener("keydown",function(event){

    makeSound(event.key);

    var drumKey = ["w","a","s","d","j","k","l"];
        if(drumKey.includes(event.key)){
            buttonAnimation(event.key);
        }

});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            // console.log(key);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}