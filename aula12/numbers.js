/* Metodos e  propriedades  do  Objeto Number 
O ponto (.) tem um papel importante no JavaScript. Ele é usado para acessar propriedades e métodos de um objeto.No JavaScript, tudo é tratado como um objeto, incluindo números.
*/


/* Exemplos: 
   toString -> Tranforma um numero para(to) String  
   toFixed -> Tranforma um numero com virgulas par(to) fixo(Fixed) 
   isInterger -> Verifica se  um numero em inteiro
   isNaN-> Verifica se um numero é um not a number(NaN);
   parsetFloat -> Converte uma string em um número de ponto flutuante (número decimal). 
*/

//  toString 
let num1 = 15;
let nomeAlgo = 'anos';

console.log(num1.toString() +'', nomeAlgo);
 console.log(typeof(num1));

 //  toFixed
 num1 = 85.995; 
 console.log(num1.toFixed(2));
  //   isInterger
 console.log(Number.isInteger(num1));

 //isNaN

 let temp = 'ola';

 console.log(Number.isNaN(temp));

 // parsetFloat
  num1 = 0.7;
  num2 = 0.1;

  num1 += num2;

  num1 =  parseFloat(num1.toFixed(2));
  console.log(num1);

 