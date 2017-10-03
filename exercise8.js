function load(){

    //Get all the elements we will be using. - instantiate -
var submitButton = document.querySelector('button');
var userInput = document.querySelector('input');
var totalShipping = document.querySelector('div p');
var dropDown = document.querySelector('select');

//Two different Event handlers(the function) to demonstrate the use of the 'e' parameter.
submitButton.addEventListener('click', calcShipping);
dropDown.addEventListener('change', dropChoice);

function dropChoice(e){
    //get dd value --index
    //userinput value
    // calculate
    // result to div p

    // e.currentTarget is the element that triggered the even. In this case it is our drop down element(select)
    var index = e.currentTarget.selectedIndex; //Find the location of the selected option (Where is it?) (returns 0, or 1, or 2, or ect...)
    var option = e.currentTarget.options[index]; // get the list of options, use the index to find the exact one we want.
    var value = option.value; //get the value from the options we selected

    var input = userInput.value; // get the value from the input field. We declared this one at the top of the load() function with the other elements.

    var result = parseInt(value) * parseInt(input); //HTML gives us strings in return. Change those to ints so we can do math with them

    totalShipping.innerHTML = result; //Display the result on the page by putting it in the 'div p' element. We declared this one at the top of the load() function


}

// e.currentTarget == dropDown

// This one is not using the 'e' parameter to capture the even.
// Instead, we are using the dropdown (select) that we declared at the start of the load() function
//Otherwise does the same thing as the above function
function calcShipping(){
    var index = dropDown.selectedIndex;
    var option = dropDown.options[index];
    var value = option.value;
    
    var input = userInput.value;

    var result = parseInt(value) * parseInt(input);

    totalShipping.innerHTML = result;
}


}















// var load = function(){
//     var submitButton = document.querySelector("button");
//     var provDropDown = document.querySelector("select");
//     var weightInput = document.querySelector('input');
//     var results = document.querySelector('div p');

//     function calculateTotal(){
//         var index = provDropDown.selectedIndex;
//         var option = provDropDown.options[index];
//         var shippingValue = option.value;

//         var finalCost = parseInt(weightInput.value) * parseInt(shippingValue);

//         results.innerHTML = finalCost;
//     }

//     submitButton.addEventListener('click', calculateTotal);
//     provDropDown.addEventListener('change', calculateTotal);
// }