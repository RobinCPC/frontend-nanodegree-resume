/*Array quiz1===================================================*/
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turn into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    var lastnum = _array.pop();
    lastnum +=1;
    _array.push(lastnum);
    newArray = _array;
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

/*Array quiz1===================================================*/

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var space = oldName.search(" ");
    var first = oldName[0];
    var firstn = oldName.slice(1, space);
    var lastn = oldName.slice(space+1);
    
    finalName = first.toUpperCase() + firstn.toLowerCase() + " " + lastn.toUpperCase();
    
    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

/*===================================================*/
