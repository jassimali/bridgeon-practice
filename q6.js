s="how are you doing, i want to convert the starting of the each words upper.";
st=s.split(" ")
for(let j in st){
    st[j]=st[j][0].toUpperCase()+ st[j].slice(1);
    }
console.log(st.join(" "))
