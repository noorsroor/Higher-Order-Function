//EX1----------------------------------
console.log("EX1:********************");
let arr = [1,2,3];

//map
function mapArray(arr) {
    return arr.map(num => Math.pow(2, num));
}

console.log(mapArray(arr));

//forEach
function forEachArray(arr) {
    let result= [];
    arr.forEach(num => {result.push(Math.pow(2, num))});
    return result;
} 

console.log(forEachArray(arr));

//forLoop
function forLoopArray (arr) {
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(Math.pow(2, arr[i]));
    }
    return result;
}

console.log(forLoopArray(arr));


//EX2----------------------------------
console.log("EX2:********************");
let arr2 = [1,2,3,"Rawan"];

function mapToString(arr) {
    let result = [];
     arr.map(num => {
        if (typeof num === 'string') {result.push("N/A")}
        else if (num %2==0) {result.push("even")}
        else {result.push("odd")}
    });

    return result;
}

console.log(mapToString(arr2));


//EX3----------------------------------
console.log("EX3:********************");
let arr3 = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

function copyArray(arr) {
    let result= [];
    arr.forEach(num => {result.push(num)});
    return result;
} 

console.log(copyArray(arr3));


//EX4----------------------------------
console.log("EX4:********************");
let arr4 = [1,3,15,4,7,10,9,8];

function fizzbuzz(arr) {
    let result = [];
     arr.map(num => {
        if ((num % 3 == 0) && (num % 5 == 0)) {result.push("Fizz Buzz")}
        else if (num % 5 == 0) {result.push("Buzz")}
        else if (num % 3 == 0) {result.push("Fizz")}
        else {result.push(num)}
    });

    return result;
}

console.log(fizzbuzz(arr4));