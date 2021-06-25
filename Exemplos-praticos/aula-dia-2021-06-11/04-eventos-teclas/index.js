var txtNome = document.getElementById(`txtNome`);
//txtNome.addEventListener(`keyup`, imprimir);
//txtNome.onkeyup = function(){ imprimir(); };

txtNome.addEventListener(`keyup`, verificarEnter );
function verificarEnter(tecla) {
   if (tecla.keyCode == 13) {
      imprimir();
   }
}

function imprimir() {
   // var txtNome = document.getElementById(`txtNome`);
   var nome = document.getElementById(`nome`);
   nome.innerHTML = txtNome.value;
}
