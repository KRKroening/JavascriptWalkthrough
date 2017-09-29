/*
  var numberOne;
  var numberTwo;
  Ref:
  var outputField;
  var buttonReference

*/

function onAppInit(){
    // Create the program vars

    var outputFiled = document.querySelector('#output p');
    var addNumbersButton = document.querySelector('button');
    function addNumbers(num1, num2){
        var sum = parseInt(num1.value) + parseInt(num2.value);
        console.log(num1.value)
        return sum;
    }
    // event handler functions
    function onAddNumbers(e){
       // call a custom function 
      var firstBox = document.querySelector('input:first-of-type');
      var secondBox = document.querySelector('input:last-of-type');
      var sum = addNumbers(firstBox,secondBox);  
      outputFiled.innerHTML = sum;
    }
    addNumbersButton.addEventListener('click', onAddNumbers);
}


document.addEventListener('DOMContentLoaded', onAppInit);
