// Exercicio Variaveis Js

// Imprimir  no console do  nodejs as seguintes variaveis = 'B','C', 'A'. 
//Porém as variaveis estão nessa ordem:   

let A = 'A';
let B = 'B';
let C = 'C';


// jeito usando variavel temporaria 

const varATemp = A;
A = B;
B = C;
C = varATemp;

console.log(A, B, C);


// jeito usando array 

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]
 
console.log(varA, varB, varC);
