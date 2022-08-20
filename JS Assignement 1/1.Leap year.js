//Leap year 
var year = prompt('Please enter the year');


isLeapYear(Number(year));

function isLeapYear(year){

  if(((year%4) == 0 && (year%100) != 0) || (year%400) == 0) {
    alert('The provided year is a leap year');
  } else {
    alert('The input year is not a leap year');
  }
  
} 


