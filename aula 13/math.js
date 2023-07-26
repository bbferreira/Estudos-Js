// Objeto Math -> Matemática An intrinsic object that provides basic mathematics functionality and constants.

let num1 = 8.4;

let num2 = Math.floor(num1);
console.log(`O arredondamento mais baixo é ${num2}`);
 num2 = Math.ceil(num1);
 console.log(`O arredondamento mais alto é ${num2}`);
 num2 = Math.round(num1);
 console.log(`O arredondamento mais proximo é ${num2} `);
console.log(Math.max( 1,2,3,4,5,6,7,8,9,10));
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));

// gerar um número aleatório entre -10 e 0
for (let i = 0; i < 10; i++) {
    let num = -10 - Math.random() * 10;
    console.log(num);
  }

  // Uzando em conjunto 
 const aleatorio = Math.random() * (10 - 5) +5 ; 
 console.log(aleatorio);
  


  

