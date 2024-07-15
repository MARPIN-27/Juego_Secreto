let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numerMaximo = 10


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //el .value me hace retornar el valor, mas no el objeto.
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); // ocupamos el operador ternario, al tener la codicion de la palabra veces.
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'el numero es mayor');
        } else {
            asignarTextoElemento('p','el numero secreto es menor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    valorCaja = document.querySelector('#valorUsuario').value = ''; //esta es una alternativa para seleccionar un elemento con id, a diferencia del .getElementId
    
}
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numerMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numerMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}   

function condicionesIniciales(){
    limpiarCaja();
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numerMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);// con setAttribute le ingreso dos parametros, que son el atributo y la afirmacion o negacion.
}

condicionesIniciales();
