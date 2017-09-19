

var myButton = document.getElementById('test');

function changeColour(){
    // If innerHTML == "Hi"
    // change button colour to blue
    //else change to red
    var inner = myButton.innerHTML;
    if(5 === "5")
    {
        myButton.style.backgroundColor = 'blue';
        myButton.innerHTML = "Yo";
    }
    else {
        myButton.style.backgroundColor = 'red';
        myButton.innerHTML = "Hi";
    }
}

myButton.addEventListener('click',changeColour);
