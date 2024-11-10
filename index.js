var totalButtons = document.querySelectorAll(".drum").length;
//To detect a button press
for(var i = 0;i<totalButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        makesSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })      
    }
//to detect a key pressed on keyboard 
document.addEventListener("keydown",function(event){
    makesSound(event.key);
    buttonAnimation(event.key);
})

function makesSound(key){
    switch(key){
        case 'w':
            var audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;
        case 'a':
            var audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;
        case 's':
            var audio3 = new Audio('sounds/tom-4.mp3');
            audio3.play();
            break;
        case 'd':
            var audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
        case 'j':
            var audio5 = new Audio('sounds/snare.mp3');
            audio5.play();
            break;
        case 'k':
            var audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
            break;
        case 'l':
            var audio7 = new Audio('sounds/kick-bass.mp3');
            audio7.play();
            break;
        default:
            console.log()
    }
}
//for button animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}