console.log("Hello World" );

const numbers = [1,2,6,7];


//Metode #1 til at tælle de numbers der ligger i arrayet 
function logger(n)  { 
    console.log(n);
}
numbers.forEach(logger)


//Metode #2 til at tælle de numbers der ligger i arrayet 
numbers.forEach(function (n) {
    console.log(n);
})