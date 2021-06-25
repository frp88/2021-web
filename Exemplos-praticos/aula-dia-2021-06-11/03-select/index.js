let selEstado = document.getElementById(`selEstado`);
let btnVerEstado = document.getElementById(`btnVerEstado`);
let lblEstadoSel = document.getElementById(`lblEstadoSel`);

btnVerEstado.addEventListener(`click`, mostraEstado);

function mostraEstado() {
  alert(`Índice = ${ selEstado.selectedIndex } | Valor = ${ selEstado.value }`);
}

selEstado.addEventListener( `change` , alteraEstado);

function alteraEstado() {
  let valorSelecionado = selEstado.options[   selEstado.selectedIndex ].value;
  let textoSelecionado = selEstado.options[ selEstado.selectedIndex ].text;
   lblEstadoSel.innerHTML = `Texto: ${textoSelecionado} - Valor: ${valorSelecionado} - Indice / Posição: ${selEstado.selectedIndex}`;
}
