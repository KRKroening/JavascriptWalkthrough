function changeBoxColour(){
    // this.style.backgroundColor = "#" + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
    this.style.backgroundColor = 'red'; //change div background colour to red
    // 'this' refers to the div that is calling the event. Don't worry about it too much.
}

function resetBoxColour(){
    event.preventDefault(); //bc 'contextmenu' has a default event that we don't want, we have to stop that from happening.
    this.style.backgroundColor = ''; //change background to nothing.
}

function divAssignment(){
    var allDivs = document.querySelectorAll('div'); //Gets all of the divs on the page and return an array of divs
    for (var i = 0; i < allDivs.length; i++) { //Need to loop through them to act on the individual divs
        if(allDivs[i].id == ''){ // We don't want the div's with id's, so filter them out
            allDivs[i].addEventListener('click', changeBoxColour); // add action on left click
            allDivs[i].addEventListener('contextmenu', resetBoxColour); //add action on right click
        }
    }
}

divAssignment();

































// function setDivEvents(){
//      var divs = document.getElementsByTagName("div");
//      for (var d = 0; d < divs.length; d++) {
//          if(divs[d].id === ""){
//             divs[d].addEventListener('click',changeBoxColour);
//             divs[d].addEventListener('contextmenu',resetBoxColour);
//          }
//      }
// }

// setDivEvents();