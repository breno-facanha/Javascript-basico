const painel = document.getElementById('painel');

let texto = ''
let numero1 = 30;
let numero2 = 10;

function soma(variavel1, variavel2){
    return variavel1 + variavel2
}

texto = soma(numero1, numero2);


const resultado = document.createTextNode(texto);
painel.appendChild(resultado);