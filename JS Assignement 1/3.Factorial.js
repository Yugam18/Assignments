// Factorial

var fact = prompt('Please enter the number');

let res = factorial(Number(fact));
alert('the factorial is' + res);

function factorial(num){

if(num === 0 || num === 1){
  return 1;
}
  
  let res;
  return num * factorial(num-1);

  
} 
