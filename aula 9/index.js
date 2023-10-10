
// Alert, confirm e prompt
/*alert('Nossa mensagem'); // alert manda um alerta no navegador 

confirm('Deseja realmente fazer isso?'); // confirm manda uma caixa de confirma no navegador 

prompt('Qual é o seu nome?'); // caixa de texto no navegador */

//Exercicio conta
  let num1 = prompt('Digite um numero');
  let  num2 = prompt('Digite outro numero');

   num1 = Number(num1);
   num2 = Number(num2);

   const resultado = num1 + num2;
   /*
alert('Resultado de sua conta foi de ' + resultado);  Jeito de fazer com concatenação 
*/
alert(`Resultado de sua conta foi de  ${resultado}`);// jeito de fazer com crase 
   