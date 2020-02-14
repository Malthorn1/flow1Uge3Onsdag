//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 + n2;
}

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

var mul = function (n1,n2) {
    return n1 * n2; 
}

//Callback example
var cb = function(n1,n2, callback){
    if ( typeof n1 === "number" && typeof n2 === "number"  && typeof callback === "function" ) {
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
} else {
    try {
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
} catch (e) {
    return console.error(e.name + ': ' + e.message); 
}}}; 



console.log( add(1,2) )     // What will this print?
//This prints the sum of the numbers 1 and 2. 
console.log( add )          // What will it print and what does add represent?
//This represents the addfunction and will just print  [Function: add ]
console.log( add(1,2,3) ) ; // What will it print
//Since there are numbers than the function can recieve only the first two will be used, the console wil print 3. 
console.log( add(1) );	  // What will it print 	
//The add function requires two inputs, the console.log prints NaN
console.log( cb(3,3,add) ); // What will it print
//This prints "Result from the two numbers: 3+3 = 6 "
console.log( cb(4,3,sub) ); // What will it print
////This prints "Result from the two numbers: 4-3 = 1 "

console.log(cb(3,3,add())); // What will it print (and what was the problem)
//This prints: "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2)
//if you add parantheses to the function call, the function expects a diffrent set of variables than 3,3 which causes it to crash. 
console.log(cb(3,"hh",add));// What will it print
//



console.log(cb (3,3,mul)); 



//Callbacks with map, filter and forEach.
var names =  ["Lars", "Jan", "Peter", "Bo", "Frederik"]; 

function filterFunc (name) {
    if (name.toString().length <= 3) {
        return name; 
    }
}
var map1 = names.filter(word => filterFunc(word) )
console.log("Dette er den originale liste navne: "+names.join(", "))
console.log("Dette er listen af navne på 3 bogstaver: " +map1.join(", ")); 



var map1 = names.map( name => toUppercaseMethod(name) ) ;
console.log("Dette er listen af navne i ALL CAPS: " + map1.join(", ")); 

function toUppercaseMethod (name) {
    return name.toString().toUpperCase(); 
}



console.log("<ul><li>" + names.join("</li><li>") + "</li></ul>" ); 


var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var nyeBIler = cars.filter(x => x.year > 1999); 
console.log(nyeBIler); 

var Volvo = cars.filter(x => x.make =="Volvo"); 
console.log(Volvo); 

var billigebiler = cars.filter( x=> x.price < 5000); 
console.log(billigebiler); 




