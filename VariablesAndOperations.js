//create a variable to hold the quantity of available plane seats left on a flight
var flightSeats = 6;
		
//create a variable to hold the cost of groceries at checkout
var groceriesCheckout = 12.46;

//create a variable to hold a person's middle initial
var middleInitial = 'a';

//create a variable to hold true if it's hot outside and false if it's cold outside
var tempHot = false;

//create a variable to hold a customer's first name
var firstName = 'Danny';

//create a variable to hold a street address
var streetAddress = '123 you live here'

var fullName = firstName + ' C Haglund';

//print all variables to the console
console.log("Seats leaft on the plane: " + flightSeats);
console.log(groceriesCheckout + " is the total price.");
console.log("Persons middle initial is " + middleInitial);
console.log("It is hot outside - " + tempHot);
console.log("Customers first name is " + firstName);
console.log(streetAddress + "is where this person is from.");



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
flightSeats = flightSeats - 2;
flightSeats -= 2;
console.log(flightSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
groceriesCheckout += groceriesCheckout + 2.15;
console.log(groceriesCheckout);

//birth certificate was printed incorrectly, change the middle initial to something else
console.log(middleInitial = 'C');

//the season has changed, update the hot outside variable to be opposite of what it was
tempHot = !tempHot;
console.log(tempHot);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log(fullName + " lives at " + streetAddress);