// add a "click" event listener to each of the "button" elements with class name "drum"
var numberofDrums = document.querySelectorAll(".drum").length
for(var i=0;i<numberofDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        MakeSound(buttonInnerHtml);
        MakeAnimation(buttonInnerHtml)
    })
}

// add a "keydown" event listener to each of the buttons
document.addEventListener("keydown", function(event){
    MakeSound(event.key);
    MakeAnimation(event.key);
})

// function to play sound when an event is triggered either keydown or click
function MakeSound(key){
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/crash.mp3").play();
            break;
        case "k":
            new Audio("sounds/snare.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            break;
    }

}

//function to make an animation when an event is triggered
function MakeAnimation(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100)
}