var numberofDrums = document.querySelectorAll(".drum").length;

for(var i =0; i<numberofDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
      
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
       
    });
    
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch(key)
    {
        case "W": 
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "A": 
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "S":
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case"D":
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "J":
        case "j":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
            break;

        case "K":
        case "k":
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.play();
            break;
        
        case"L":
        case "l":
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
            break;

        default:
    }
}