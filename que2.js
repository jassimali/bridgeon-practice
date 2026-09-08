// const temp=[10,11,12,13,14,15,16,17,18,19,20];
// for(let x of temp){
//     if(x%2==0 && x!=0){
//         console.log("Even number: "+x);
//     }
// }

// const person={
//     name:"Ali",
//     age:24,
//     nationality:"Indian"

const arr=[1,2,3,4,5,6,7,8]
vow="aeiou"
st="What is your name";
for(let i of st){
    if(i!=" ")
        if(vow.includes(i.toLowerCase())){
            console.log(`${i} is a vowel`);
        } 
        else{
            console.log(`${i} is not a vowel`);
        }
}

// console.log(arr.slice(0,3).toString());
console.log(st.charAt(2).toUpperCase());

