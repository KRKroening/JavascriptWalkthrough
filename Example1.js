
function moveOptionDown(){
    var dropDownList = document.getElementById('topMove');
    var index = dropDownList.selectedIndex;
    var selectedItem = dropDownList.options[index];
    document.getElementById('bottomMove').appendChild(selectedItem);
}

function moveOptionUp(){
    var dropDownList = document.getElementById('bottomMove');
    var index = dropDownList.selectedIndex;
    var selectedItem = dropDownList.options[index];
    document.getElementById('topMove').appendChild(selectedItem);
}

function addCustomListerners(){
    var toBottomlist = document.getElementById('moveDown');
    toBottomlist.addEventListener('click', moveOptionDown);

    var toTopList = document.getElementById('moveUp');
    toTopList.addEventListener('click', moveOptionUp);
}

addCustomListerners();








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