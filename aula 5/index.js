// Exercicios de  const e let 

/*
/ Descubra  imc e ano de nascimento  e altere se preciso as variaveis  formula do IMC = peso / (altura*altura); E imprima a frase na tela 
 Luiz Otavio tem 30 anos, pesa 84 kg
 tem 1.80 de altura ano de nascimento e IMC*/

const nome = 'Luiz';
const sobrenome = 'Otavio';
const idade = 30;
const peso = 84;
const altura = 1.80;
 

let imc;
let anoNascimento; 
let anoAtual = 2023;
imc = peso / (altura * altura);
anoNascimento = anoAtual - idade;
//console.log(imc);
//console.log(anoNascimento);
//console.log(nome + ' ' + sobrenome + 'tem ' +  idade + 'anos ',  'com um peso de ' + peso +' kilos ','com uma altura de ' +  altura +' metros ',' nascido no ano de '+ anoNascimento + ' com um imc de '+ imc)

// template de variaveis  forma legivel de imprimir variaveis 

console.log(`${nome} ${sobrenome} tem ${idade} anos com um peso de ${peso} kilos com uma altura de ${altura} metros nascido no ano de ${anoNascimento} com um imc de ${imc}`);
