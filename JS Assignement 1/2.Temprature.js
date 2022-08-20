 
 //Celcius to ferenheit & Vice Versa
 let ferenheit = 98.6;

convertF2C(ferenheit);

function convertF2C(f){
  
  let c;
  c= Math.round((f-32) * (5/9));
  console.log(c);
  
}

let celcius = 10;

convertC2F(celcius);

function convertC2F(c){
  let f;
  f= c*(9/5)+32;
  console.log(f)
} 