
function moveOptionDown(){ //Move selected item from one dropdown to the other
    var dropDownList = document.getElementById('topMove');//get dropdown object
    //find the selectedIndex attributes from the dropdown item. This index will tell us what location to look for the item we want.
    var index = dropDownList.selectedIndex; 
    // Need to isolate the list of options associated with the dropdown list. Using the index, we will find the item at that location
    var selectedItem = dropDownList.options[index]; 
    document.getElementById('bottomMove').appendChild(selectedItem); //Moves the found item from starting dropdown to the other dropdown.
}

function moveOptionUp(){
    var dropDownList = document.getElementById('bottomMove');
    var index = dropDownList.selectedIndex;
    var selectedItem = dropDownList.options[index];
    document.getElementById('topMove').appendChild(selectedItem);
}

function addCustomListerners(){ //To add listeners to our buttons
    var toBottomlist = document.getElementById('moveDown'); //get button item
    toBottomlist.addEventListener('click', moveOptionDown); //add event to button on click

    var toTopList = document.getElementById('moveUp');
    toTopList.addEventListener('click', moveOptionUp);
}

document.addEventListener('domContentLoaded',addCustomListerners); //changed to load event to be in line with Jim







// function moveToBottomList(){
//     var dropDown = document.getElementById('topMove');
//     var dropDownIndex = dropDown.selectedIndex;
//     var option = document.getElementById('topMove').options[dropDownIndex];
//     document.getElementById('bottomMove').appendChild(option);  
// }

// function moveToTopList(){
//     var dropDownIndex = document.getElementById('bottomMove').selectedIndex;
//     var option = document.getElementById('bottomMove').options[dropDownIndex];
//     document.getElementById('topMove').appendChild(option);  
// }

// function addEventListeners(){
//     var moveDown = document.getElementById('moveDown');
//     moveDown.addEventListener('click',moveToBottomList);

//     var moveUp = document.getElementById('moveUp');
//     moveUp.addEventListener('click',moveToTopList);

// }


// addEventListeners();