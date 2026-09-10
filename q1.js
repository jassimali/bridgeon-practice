/* 1. Write a function findSmallest(a, b, c) that finds and prints the smallest of three numbers. 
Example: ● findSmallest(3, 7, 5) → Output: 3  
        ● findSmallest(12, 15, 10) → Output: 10 */


function findSmallest(a,b,c){
    let x = (a>b)?((b<c)?b:c):((a>c)?c:a);
    return x;
}
let y=findSmallest(12,15,10);
console.log(y);