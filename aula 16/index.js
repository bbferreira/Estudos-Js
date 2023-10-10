//funções em javascript

//funções em JavaScript são blocos de código que podem ser chamados e executados para realizar uma tarefa específica. Elas desempenham um papel fundamental no desenvolvimento web e programação em geral, permitindo a modularização, reutilização e organização do código. 



// funçaõ de soma
function soma(){
    const resultado = 2+ 2;
    return resultado;
}

console.log(soma());


// função verifcar5 se é par

function verificaPar(){
    let som = soma();
        if( som %2 === 0) {
        return "par";
    } else {
        return "impar";
    }
 
}

console.log(verificaPar(soma()));
          
        // funcoes anonimas

         const raiz = function(n){
            return n  ** 0.5;// 0.5 verifca se é raiz quadrada

         };

          console.log(raiz(9));

        // funções de seta => arrow functions
        const s = (a, b) => a + b;
        console.log((s(5,3)));
    