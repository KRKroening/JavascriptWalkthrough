/*

	Below, we have a solution that makes use of document.querySelector quite a bit.
	Create a function to 'wrap' the document.querySelector functionality so that it requires
	less typing to call the function.

	The function signature should be as follows:

	function runQuery(selector)

	The body of the function should consist of a single return statement that returns the result
	from the call to document.querySelector(selector)

    Once complete, you should be able to replace all calls to document.querySelector() with runQuery()
    
    
*/
    var disclosing;
    var receiving;
    var date;

    // popups to get our info (rather than using text boxes)
    disclosing = prompt('Enter disclosing party name:');
    receiving = prompt('Enter receiving party name:');
    date = prompt('Enter the date [month, day, year]:');


    //document.querySelector('.parties .disclosing-party').innerHTML = disclosing;
    runQuery('.parties .disclosing-party').innerHTML = disclosing

    //document.querySelector('.disclosing-signature .disclosing-party').innerHTML = disclosing;
    runQuery('.disclosing-signature .disclosing-party').innerHTML = disclosing

   // document.querySelector('.parties .receiving-party').innerHTML = receiving;
    runQuery('.parties .receiving-party').innerHTML = receiving;

    // document.querySelector('.receiving-signature .receiving-party').innerHTML = receiving;
    runQuery('.receiving-signature .receiving-party').innerHTML = receiving;


    runQuery('.date').innerHTML = date;
    // document.querySelector('.date').innerHTML = date;

    /*
    custom made function to reduce the redundancy of always having to type 
    'document.getQuery...' every time. 
    In this case, we are passing in the desired css selector.
    This function will return the entire element from the page which we can then manipulate.
    */
    function runQuery(searchByThisPlease){
        return document.querySelector(searchByThisPlease);
    }