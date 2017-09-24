function onAppInit(){

//get rbg values

//add event to button

// get body element


function grabRGBNumbers()
{
    // Get the input element. Get the value all in one step.
    var red = document.getElementById('red').value;

    var blue = document.getElementById('blue').value;

    var green = document.getElementById('green').value;
    // rbg(xxx,xx,xx)
    // create the rbg string needed to set the new colour. Concatnate the string we get 
    // from the inputs into the required format.
    var rbgColourHolder = "rgb(" + red + "," + green + "," + blue + ")";

    var body = document.querySelector('body'); //get the body element(want to change it's color)
    body.style.backgroundColor = rbgColourHolder; //assign our new rbg color to the background color
}    

var submitClick = document.querySelector('button');// Get submit button element
submitClick.addEventListener('click', grabRGBNumbers); //assign an event to the submit button.

}













// function load(){
//     function changeBackgroundColor(){ 
//         var red = document.getElementById("red").value;
//         var blue = document.getElementById("blue").value;
//         var green = document.getElementById("green").value;

//         var body = document.querySelector("body");

//         var rbgColor = "rgb(" + red + "," + green + "," + blue + ")";
//         body.style.backgroundColor = rbgColor;
//     }

//     function assignEvents(){
//         var button = document.querySelector("button");
//         button.addEventListener('click',changeBackgroundColor);
//     }

//     assignEvents();

// }


// 0 - 255
// rbg(xxx,xxx,xxx)