


let numeroSecreto = 0;
let intentos = 0;
let listaNrosSorteados = [];
let nroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
    return;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);//el parseInt sirve para forzar el dato ingresado a 
//console.log(`el nro deintentos es ${intentos}`);
    if (numeroDeUsuario === numeroSecreto){ //el triple igual sirve para comparar no solamente el dato, sino tambien el tipo de dato, por lo que comprara si ambos son string o number

    asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos ==1) ? `intento` : `intentos` } `);
    document.getElementById("reiniciar").removeAttribute("disabled");
      
    }
    
    else {
        //no acerto
        if (numeroDeUsuario > numeroSecreto){ 

            asignarTextoElemento("p", "El numero es menor");
            }

        else{ (numeroDeUsuario < numeroSecreto)

            asignarTextoElemento("p", "El numero es mayor");
            }
            intentos++;
            limpiarCaja();
    
        }
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
    }

    function generarNumeroSecreto(){
    let nroGenerado = Math.floor(Math.random()*nroMaximo)+1;
        console.log(nroGenerado);
        console.log(listaNrosSorteados);
        //si ya sorteamos todos los nros
        if (listaNrosSorteados.length == nroMaximo){
            asignarTextoElemento('p','ya se sortearon todos los nros posibles');
            }
            else{ 
        //si el nro generado esta incluido en la lista,
        if (listaNrosSorteados.includes(nroGenerado)){
        
            return generarNumeroSecreto();
        }
        else {

        listaNrosSorteados.push(nroGenerado);
        return nroGenerado;
        }
        }
}

function condicionesIniciales(){
asignarTextoElemento('h1','Juego del nro secreto!');
asignarTextoElemento('p',`indica un nro del 1 al ${nroMaximo}!`);

intentos = 1;
numeroSecreto = generarNumeroSecreto();
}
function reiniciar(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
//console.log(numeroSecreto);