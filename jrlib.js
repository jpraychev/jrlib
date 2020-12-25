/**
 * Sum of all numbers in range regardless the order that values are supplied 
 * @param  {Array} arr Array of two numbers
 * @return {Number}      The sum of all numbers in array's range
 * 
 * Basic usage:
 * sumAll([1,4]) returns 1+2+3+4;
 * sumAll([4,1]) returns 1+2+3+4;
 */

function sumAll(arr) {
    const startAt = Math.min(...arr);
    const arrSize = Math.max(...arr)-startAt+1;
    const sumArr = [...Array(arrSize).keys()].map(i => i + startAt);
    return sumArr.reduce((sum, curValue) => sum + curValue);
}


/**
 * Array of specified size with optional start and step values. 
 * @param {Number} size Size of the new array
 * @param {Number} start Start value of new array
 * @param {Number} step Step value of the new array
 * @return {Array}      Array of numbers with specified parameters
 * 
 * Basic usage:
 * range(5) returns 0,1,2,3,4;
 * range(5,1) returns 1,2,3,4,5;
 * range(5,1,2) returns 1,3,5;
 */

function range(size, start=0, step=1) {
    const arr = [];
    for (let i=start; i<size+start; i+=step) {
        arr.push(i);
    }
    return arr
}


function diffArray(arr1, arr2) {
    let diff = arr1
        .filter(x => !arr2.includes(x))
        .concat(arr2.filter(x => !arr1.includes(x)));
    return diff;
}