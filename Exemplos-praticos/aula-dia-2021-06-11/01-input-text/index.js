var btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener('click', limpar);
txtn2.addEventListener('keyup', verificarTecla);

// Função que verifica se a tecla apertada foi a tecla Enter
function verificarTecla(tecla){
    // Verifica se a tecla apertada foi a tecla Enter
    if (tecla.keyCode == 13){
        // Executa a função que realiza a soma dos números digitados
        somar();
    }
}

function limpar(){
    document.getElementById("txtn1").value = "";
    document.getElementById("txtn2").value = "";
    document.getElementById("resultado").innerHTML = "...";
    // Coloca o foco em uma caixa de texto
    document.getElementById("txtn1").focus();
}

function somar(){
    // pegar as TAGs HTML
    var txtn1 = document.getElementById("txtn1");
    var txtn2 = document.getElementById("txtn2");
    var result = document.getElementById("resultado");
    // Pega o valor digitado na caixa de texto (TAG input) e converte para um número
    var n1 = Number(txtn1.value);
    var n2 = Number(txtn2.value);
    // Somar os números digitados pelo usuário
    var soma = n1 + n2;
    // Exibir resultado na página HMTL
    result.innerText = `A soma entre ${n1} e ${n2} é igual a ${soma}`;
}