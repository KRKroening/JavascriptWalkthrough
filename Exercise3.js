//Wrapping the whole script in a single function.
//Allows for restricting access, eliminates global variable conflicts
var load = function(){ 
    var button = document.querySelector('button');
    
    function fireEvent(){
        // Get index of selection, get the list of options, get the option at that index. Get value from that option
        colorIndex = document.querySelector('select').selectedIndex;
        colourChosen = document.querySelector('select').options[colorIndex].value;

        var body = document.querySelector('body'); //get body element and assign background color.
        body.style.backgroundColor = colourChosen;
    }

    button.addEventListener('click',fireEvent);
}