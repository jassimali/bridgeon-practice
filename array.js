text="Hi Good Morning EveryoneofYou";
let item=text.split(" ");
console.log(item);
let big=0;
for(let i=0;i<item.length;i++){
    if(item[i].length>big){
        big=item[i].length;
        big_vl=item[i];
    }
}
console.log(vl);



