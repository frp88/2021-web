var a = document.getElementById(`area`);
a.addEventListener(`click`, clicar);
a.addEventListener(`mouseenter`, entrar);
a.addEventListener(`mouseout`, sair);

function clicar() {
    a.innerText = `Clicou!`;
    a.style.background = `orange`;
} 
function entrar() {
    a.innerText = `Entrou!`;
    a.style.background = `blue`;
}
function sair() {
    a.innerText = `Saiu!`;
    a.style.background = `red`;
}