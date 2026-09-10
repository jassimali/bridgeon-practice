/*Write a function to filter out all numbers in an array that are multiples of a given number n. 
Examples: ● filterArray([2, 6, 9, 15, 20], 10) → Output: [6, 9, 15]. 
         ● filterArray([20,17,6,50], 10) → Output: [20,10]. */
const res=[]
function filterArray(arr,n){
    for(let x of arr){
        if (x%n==0){
            res.push(x); 
        }
    }
    console.log(res)
}
filterArray([20,17,6,50], 10)