//Wrapping the whole script in a single function.
//Allows for restricting access, eliminates global variable conflicts
var load = function(){ 
    
    
    function fireEvent(){
        // Get index of selection, get the list of options, get the option at that index. Get value from that option
        var colorIndex = document.querySelector('select').selectedIndex;
        var colourChosen = document.querySelector('select').options[colorIndex].value;

        var body = document.querySelector('body'); //get body element and assign background color.
        body.style.backgroundColor = colourChosen;
    }
    var button = document.querySelector('button');
    button.addEventListener('click',fireEvent);
}