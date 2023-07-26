
const numero = Number(prompt('Digite um número')); const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada  é ${Math.sqrt(numero)}<p/>`;
texto.innerHTML += `<p>${numero} é inteiro:${Number.isInteger(numero)} <p/>`;
texto.innerHTML += `<p>è um NaN: ${Number.isNaN(numero)}</P>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</P>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.round(numero)}</P>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</P>`;

