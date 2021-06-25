// Pegar o elemento HTML da página 
var lampada = document.getElementById(`lampada`);
// Define qual Função será executada qual acontecer um determinado Evento
// lampada.addEventListener(`click`, quebrarLampada);
// lampada.addEventListener(`mousemove`, acenderLampada);
// lampada.addEventListener(`mouseout`, apagarLampada)
var quebrada = false;

// Função que acende a lâmpada
function acenderLampada(){
    // Alterar a imagem do elemento HTML
    lampada.src = `imagens/lampada-acesa.jpg`;
}
// Função que apaga a lâmpada
function apagarLampada(){
    lampada.src = `imagens/lampada-apagada.jpg`;
}
function quebrarLampada(){
    lampada.src = `imagens/lampada-quebrada.jpg`;
}

function mudarLampada(tipo){
    // Verifica se a lâmpada não está quebrada
    //if (quebrada == false){
    if (!quebrada){
        //lampada.src = `imagens/lampada-` + tipo + `.jpg`;
        lampada.src = `imagens/lampada-${tipo}.jpg`;
        // Verifico qual é o tipo atual da lâmpada
        if (tipo == 'quebrada'){
            quebrada = true;
        }
    }
   
    
   
    
}



