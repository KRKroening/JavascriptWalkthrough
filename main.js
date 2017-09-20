

var myButton = document.getElementById('test'); //get button object

function changeColour(){
    // If innerHTML == "Hi"
    // change button colour to blue
    //else change to red
    var inner = myButton.innerHTML; //get 'innerHTML' attribute from the button object
    if(inner === "Hi") //compare innerHTML of button to our chosen value. === for strict equality
    {
        myButton.style.backgroundColor = 'blue'; //Change background color
        myButton.innerHTML = "Yo"; // change text. Will cause a toggle between color/text
    }
    else {
        myButton.style.backgroundColor = 'red';
        myButton.innerHTML = "Hi";
    }
}

myButton.addEventListener('click',changeColour); //Adding event to button click
