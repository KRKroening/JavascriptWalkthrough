function changeBoxColour(){
    // this.style.backgroundColor = "#" + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
    this.style.backgroundColor = 'red';
}

function resetBoxColour(){
    event.preventDefault();
    this.style.backgroundColor = '';
}

function divAssignment(){
    var allDivs = document.querySelectorAll('div');
    for (var i = 0; i < allDivs.length; i++) {
        if(allDivs[i].id == ''){
            allDivs[i].addEventListener('click', changeBoxColour);
            allDivs[i].addEventListener('contextmenu', resetBoxColour);
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