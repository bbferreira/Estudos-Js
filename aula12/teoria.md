## Teoria dos estudos do Javascript aual 12

--Aqui estão todas as anotações teorias que tirei com javascript

---Metodos e  propriedades  do  Objeto Number:

O ponto (.) tem um papel importante no JavaScript. Ele é usado para acessar propriedades e métodos de um objeto.No JavaScript, tudo é tratado como um objeto, incluindo números.

--funcões em js:

Em JavaScript, as funções desempenham um papel fundamental. Elas são blocos de código reutilizáveis que podem ser chamados e executados em diferentes partes do seu programa. As funções podem receber argumentos (valores de entrada) e retornar valores como resultado.

-Aqui está um exemplo básico de uma função em JavaScript:
<code>
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

saudacao("João"); // Chamando a função e passando o argumento "João"
</code>

As funções também podem retornar valores usando a palavra-chave return. Veja um exemplo:

<code>
function soma(a, b) {
  return a + b;
}

var resultado = soma(3, 4);
console.log(resultado); // Imprime 7

</code>

--Quando usar o return:

Sempre que você precisar que uma função retorne um valor específico ou que interrompa a execução e retorne antecipadamente, o return será útil.