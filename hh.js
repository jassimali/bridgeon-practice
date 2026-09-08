let str1="hello, jassim ali ,kk";
let count=1;
let res="";
for (let x of str1){
    if(x==" " || x==","){
        count=1;
        res+=x;
    }
    else if(count==2){
        let y = x.toUpperCase();
        res+=y;
        count+=1;
    }
    else{
        count+=1;
        res+=x;
    }
}
console.log(res)