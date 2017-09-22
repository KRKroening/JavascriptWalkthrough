function onAppInit(){

//get rbg values

//add event to button

// get body element


function grabRGBNumbers()
{
    var red = document.getElementById('red').value;

    var blue = document.getElementById('blue').value;

    var green = document.getElementById('green').value;
    // rbg(xxx,xx,xx)
    var rbgColourHolder = "rgb(" + red + "," + green + "," + blue + ")";

    var body = document.querySelector('body');
    body.style.backgroundColor = rbgColourHolder;
}    

var submitClick = document.querySelector('button');
submitClick.addEventListener('click', grabRGBNumbers);

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