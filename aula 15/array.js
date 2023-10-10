// Array => Lita uma coleção de dados-> podendo ser numeros, nomes, objetos 

const  alunos = ['Luiz', 'Maria', 'Jose'];// array de nomes 
//console.log(alunos);
// Exibir indices dos arrays
//console.log(alunos[0]);

//Editar  dados no array

alunos[0] = 'Bruno';
//console.log(alunos);


// Saber o tmanho do meu array

//console.log(alunos.length);

//  adicionar elementos ao final do  meu array

alunos.push('Otavio');

//console.log(alunos);


// adicionar elemento no começo do array

alunos.unshift('Pedro');
//console.log(alunos);


 

 
 // criando uma variavel para os elementos removidos do array
 let  removido = alunos.pop()
 console.log(removido);

 //remove elementos do começo do array

   removido = alunos.shift()
 console.log(removido);


 //Fatiar um array 
 console.log(alunos.slice(0,2));

/*dicionar um   numero aleatorioem um array vazio

    let array = [];
let numeroAleatorio = Math.floor(Math.random() * 100);
array.push(numeroAleatorio);
console.log(array);
*/
/*
const maxNumbers = 100;
for(let contador = 0; contador < maxNumbers; contador++){// ++ significa incremento
 array[contador] = contador + 1;
 console.log(array);
}

*/

