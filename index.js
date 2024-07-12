
// document.querySelector("button").addEventListener("click",function(){       
//     alert("Ouch, I got clicked!")
// });

//The above code is only for the 1st button as All is not used in querySelector.
//Even if we just use All it doesn't matter cause we are not iterating through the array that we get after using querySelectorAll
//And to iterate throught the array we have to use : querySelectorAll[0],querySelectorAll[1],   till last button(i.e, at index 6)
//And we can achieve it using loops 

//Detects click


for(var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){   //saari button mei eventlistner add kar kar diya hai, abb kisi mei bhi click hoga hume pta chal jaega

        // var audio=new Audio('sounds/tom-1.mp3');
        // audio.play();

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keyboard press

document.addEventListener("keypress",function(event){    //We added event listner to the entire document, and it stores the keys
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch(key){
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick=new Audio('sounds/kick.mp3');
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+ currentkey);  //will select the button depending on their letter present in the class
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}

