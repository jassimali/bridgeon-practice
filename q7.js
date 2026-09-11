function op(str){
    let total=0
    for(let x of str.toLowerCase()){
        
        if(x=="i"){
            total+=1;
        }
        else if(x=="d"){
            total-=1;
        }
        else if(x=="s"){
            total*=total;
        }
    }
    console.log(total)
}
op("iiss");