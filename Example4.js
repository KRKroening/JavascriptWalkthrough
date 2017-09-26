function load(){
    /*
    Plan is to store every key pressed then compute when = is pressed
    The calculation will be dynamically displayed beside the  result box

    */

    //  Set up global variables. These will be refered to by all the other functions.
    var resultBox = document.querySelector(".divTableCellResult input");
    var happening = document.querySelector(".divTableCellHappening p");

    var currentOperator;
    var currentInt = "";
    var currentResult = 0;

    function addNumberFromClick(){
        var value = this.id; //get the id of which ever button has triggered the event
        currentInt += value; // append next digit to the current number
        happening.innerHTML += value; //display the next number

        // Remember, 'this' just means which ever element called the function
    }

    function operatorClick(){
        var operator = this.id; 
        currentOperator = operator; //get our operator
        happening.innerHTML = happening.innerHTML + " " + currentOperator; // add operator to the list 
    }

    function equalsClick(){
        currentResult = eval(happening.innerHTML); //Takes our string of operations and calculates then as real numbers.
        resultBox.value = currentResult; //display the calculated result
        currentResult = 0; //reset the other things
        happening.innerHTML = "";
    }

    function clear(){ //clears all functions
        currentInt = 0;
        currentOperator = "";
        currentResult = 0;
        happening.innerHTML = "";
        resultBox.value = "";
    }

 
    function assignEventHandlers(){
        //Need to assign click event to all buttons
        var allButtons = document.querySelectorAll('button'); //get all buttons
        for (var i = 0; i < allButtons.length; i++) { //loop though the button list so we can act on each one individually
            var value = allButtons[i].id; //Get the id since that is how we are distingishing the jobs
            if(!isNaN(value)) //is value is a number
            {
                allButtons[i].addEventListener('click', addNumberFromClick) //Assigns buttons for 1-0
            } else {
                // checks the values of the other buttons
                // + - = clear
                switch(value) 
                {
                    case 'clear':
                        allButtons[i].addEventListener('click', clear);
                        break;
                    case '+':
                        allButtons[i].addEventListener('click', operatorClick);
                        break;
                    case '-':
                        allButtons[i].addEventListener('click', operatorClick);
                        break;
                    case '=':
                        allButtons[i].addEventListener('click', equalsClick);
                        break;
                    default:
                        break;
                }
            }
            
        }

    }

// My DOM loaded event is a script tag on the HTML page. I like to keep that seprate from the rest of the code. Two load events on a single page looks messy to me.
    assignEventHandlers();
}