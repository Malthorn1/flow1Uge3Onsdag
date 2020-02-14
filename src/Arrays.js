


//A) 
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "Hanne", "Sanne"];
 


var all = []; 

//B) 
all = all.concat(boys,girls); 
console.log(boys);
console.log(girls);
console.log(all); 

//C) 
console.log(all.join()); 
console.log(all.join("-"));
console.log(all.join(" "));

//D & E)
all.push("Lone", "Gitte"); 
all.unshift("Hans", "Kurt"); 
console.log(all.join(", "));

//F & G)
all.shift();
all.pop(); 
console.log(all.join(", "));

//H) 
all.splice(3,2); 
console.log(all.join(", "));

//I) 
all.reverse(); 
console.log(all.join(", "));


//J)
all.sort(); 
console.log(all.join(", "));



//I)
var map1 = all.map( x => toUppercaseMethod(x) ) ;
console.log(map1.join(", ")); 

function toUppercaseMethod (name) {
    return name.toString().toUpperCase(); 
}


//M)
function filterbyLetterMethod (name) {
    if (name.toString().includes("l") ||name.toString().includes("L")) {
        return name; 
    }
    return 
}
var map2 = all.filter(word => filterbyLetterMethod(word)); 
console.log(map2.join(", ")); 

