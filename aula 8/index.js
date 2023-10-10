//Operadores aritmeticos de  atribuição e incremento

/*
Aritmeticos
+ adição / concatenação
-  subtração 
* multiplicação
/ divisão 
** Potenciação
% Resto da divisão 
*/



// Adição são numbers
const num1 = 5;
const num2 = 10;
console.log(num1+num2);

// Conactenação só se for trings  
 const numero1 = '5';
 const numero2 = '10';
 console.log(numero1+numero2);

 //subtração 


 console.log(num2-num1);

// Multiplicação

console.log(num2*num1);

//Divisão

console.log(num2/num1);

//Potenciação
console.log(num2**num1);

// Resto da divisão 

console.log(num2%num1);

/*
 Prescencia aritmética => Ordem de execução 
() - Parenteses
** - Potenciação 
*, % e  / - Multiplicação, resto e divisão tem a mesma ordem só dependem de quem está me primeiro da esquerdsa para direita 
+ e - =>  tem a mesma ordem só dependem de quem está me primeiro da esquerdsa para direita 
*/

//Parenteses

const n1 = 10;
const n2 = 5;
const n3 = 2;

console.log((n1 + n2) *n3);

//Potenciação

console.log(n1 + n2 **n3);

// Multiplicação, resto e divisão 

console.log(n1*n3/n3%n1);

// Adição, Subtração

console.log(n1 + n2 - n3);


/*
 Opeadores de incremento
 Incremento ++ 
 Decremento --
so utiliza variaveis em let 
 */

//Incremento
let contador = 2;
 contador++;
 contador++;
 console.log(contador);

 //Pos incremento apresesenta o incrimento apos a exibição do console.log 
let contar = 2;
console.log(contar++);
console.log(contador);

//Pre incremento  apresenta o incremento primeiro que a exibição do console.log

let c = 2;
console.log(++c);

//Decremento
contador = 10;
contador --;
console.log(contador);


// Contador  de varios pasos ou pulos serve para qualquer operador aritmetico

const passo = 5;
 contador = 0;
 contador = contador + passo;
 console.log(contador);
 contador = contador + passo;
 console.log(contador);
 contador = contador + passo;
 console.log(contador);

 // Atribuição que é como se fosse um atalho

 contador = 1;
 contador += passo;
 console.log(contador);

 // Tomar cuidado com os tipos de dados pois pode dar um NaN a resposta que significa Not a Number
 let dado1 = '10';
 let dado2 = 'Bruno';
 console.log(dado1*dado2);

 // Quando tiver parenteses ele pede para ser executado alguma coisa  no caso mudar uma string para number  temos 3 jeitos mas só se tiver um numero declarado como string 

 //função parseInt(inteiro)  conversao inteiro
 
dado1 = parseInt('10');
dado2 = 5;
console.log(dado1*dado2);

// função parseFloat(Flutuante) conversao numero casas decimais.

dado1 = parseFloat('10.2');
dado2 = 5;
console.log(dado1 + dado2);

// função Number conversão de qualquer numero sem distinção

dado1 = Number('10.2');
dado2 = 5;
let dado3 = Number('7');

console.log(dado1 + dado2 + dado3);