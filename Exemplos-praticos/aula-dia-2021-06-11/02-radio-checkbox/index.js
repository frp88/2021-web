// Pegar os elementos HTML
var titulo = document.getElementById('titulo');
let txtNro = document.getElementById(`txtnro`);
var dobro = document.getElementById("dobro");
//let quadrado = document.getElementById("quadrado");
let quadrado = document.querySelector("input#quadrado");
let btnCalcular = document.getElementById("btnCalcular");
var res = document.getElementById('resultado');
let escondido = document.getElementById(`escondido`);
// Vincular o evento da TAG HTML com uma função
btnCalcular.addEventListener('click', calcular);
escondido.addEventListener('change', esconderTitulo)


// Função que oculta / exibe a TAG de título
function esconderTitulo(){
    if (escondido.checked == true){
       titulo.hidden = true;
    }
    else{
        titulo.hidden = false;
    }
}

// Função que realiza o cálculo
function calcular(){
    // converter o valor digitado para um número
    let nro = Number(txtNro.value);
    // Verificar qual cálculo será executado
    if (dobro.checked == true){
        res.innerHTML = `Dobro: ${nro * 2}`;
    }
    else{
        res.innerHTML = `Quadrado: ${nro * nro}`;
    }
}
