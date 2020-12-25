/**
 * Sum of all numbers in range regardless the order that values are supplied 
 * @param  {Array} arr Array of two numbers
 * @return {Number}      The sum of all numbers in array's range
 * 
 * Basic usage:
 * sumAll([1,4]) returns 1+2+3+4;
 * sumAll([4,1]) return 1+2+3+4;
 */

function sumAll(arr) {
    const startAt = Math.min(...arr);
    const arrSize = Math.max(...arr)-startAt+1;
    const sumArr = [...Array(arrSize).keys()].map(i => i + startAt);
    return reducer = sumArr.reduce((sum, curValue) => sum + curValue);
}