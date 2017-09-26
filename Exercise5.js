function onAppInit(){

    //get rbg values

    //add event to button

    // get body element

    function getColorInput(){
        var red = document.getElementById('red').value;
        var green = document.getElementById('green').value;
        var blue = document.getElementById('blue').value;

        var allColors = "rgb("+ red +"," + green +"," + blue +")";
        var backgroundChange = document.querySelector('body');
        backgroundChange.style.backgroundColor = allColors;
    }

    var submitButtton = document.getElementById("submit");
    submitButtton.addEventListener('click', getColorInput);
}





















    // function grabRGBNumbers()
    // {
    //     // Get the input element. Get the value all in one step.
    //     var red = document.getElementById('red').value;

    //     var blue = document.getElementById('blue').value;

    //     var green = document.getElementById('green').value;
    //     // rbg(xxx,xx,xx)
    //     // create the rbg string needed to set the new colour. Concatnate the string we get 
    //     // from the inputs into the required format.
    //     var rbgColourHolder = "rgb(" + red + "," + green + "," + blue + ")";

    //     var div = document.getElementById('target'); //get the body element(want to change it's color)
    //     div.style.backgroundColor = rbgColourHolder; //assign our new rbg color to the background color
    // }    

    // var submitClick = document.querySelector('button');// Get submit button element
    // submitClick.addEventListener('click', grabRGBNumbers); //assign an event to the submit button.