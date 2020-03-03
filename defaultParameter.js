// I think only null(which is an object(js bug)) and undefined are the only freaking things which are both value and data type

// Legacy
function add(a, b) {
    // b = b || 0;
    // or
    b = b ? b : 0;
    return a + b;
}

let result = add(4);
console.log(result);
