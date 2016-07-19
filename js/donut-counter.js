//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
var guests;
var donuts;

//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
var prompt = require('prompt');
prompt.start();
prompt.get(['guests', 'donuts']) function(result){
  console.log('guests: ' + result.guests);
  console.log('donuts: ' + result.donuts);
}
//use parseInt to convert the users answer from a string to an integer.
guests = parseInt(guests)
donuts = parseInt(donuts)
//write a conditional to check if there are enough donuts
if (donuts >= guests) {
  return 'There are ${donuts} and ${guests}. There are enough donuts for all of the guests';
  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
} else {
  return 'There are ${donuts} and ${guests}. There are not enough donuts for all of the guests';
}
