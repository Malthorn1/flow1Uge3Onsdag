    var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];


var tableHeaders = "<tr> <th>id </th> <th>Year</th> <th>Make </th> <th>Model </th> <th>price </th> </tr>"; 
var fullTable= tableHeaders ; 

for (var i = 0; i < cars.length; i++) {
    var tablerows = "<td>" + cars.join("</td><td>" + "</tr>"); 
    fullTable = fullTable + tablerows; 
    
}

console.log(fullTable);