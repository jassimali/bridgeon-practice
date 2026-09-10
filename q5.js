// Write a function that takes an object containing movie details and returns a formatted string using object properties.
// Example: ● movieInfo({ name: "Inception", year: 2010 }) 
// → Output: "Inception was released in 2010". 

function movieInfo(Obj){
    console.log(`${Obj.name} was released in ${Obj.year}`);
}

const Mov={
    name:"DC",
    year:"2026"
}

movieInfo(Mov);