let numerosecreto = generanumerosecreto();
intentos=0;
let listaDenumeroSecreto= [];

function asignarTextoElemento(elemeto, texto){
    let titulo = document.querySelector(elemeto);
titulo.innerHTML= texto
}


let parrafo = document.querySelector("p")
parrafo.innerHTML= "Indica un numero para empezar a jugar: "

function IntentoDeusuario(){
    let numeroDeusuario = document.getElementById("valorUsuario").value;
    console.log(numerosecreto)
    if(numeroDeusuario==numerosecreto){
        asignarTextoElemento(`p`, `Adivinaste el numero en ${intentos} ${(intentos==1) ? "intentio": "intentos"}. Feliciadades.`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        
        if(numeroDeusuario < numerosecreto){
            asignarTextoElemento("p", "El numero es mayor. Sigue asi")
        }
        else{
            asignarTextoElemento("p", "El numero es menor, Sigue asi")
        } 
        intentos= intentos +=1;  
        limpiarCaja();
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto.");
    asignarTextoElemento("p", "Ingrese un numero.")
    numerosecreto = generanumerosecreto();
    intentos= intentos +=1;  

}

function limpiarCaja(){
    let valorcaja= document.querySelector("#valorUsuario").value="";
    
}

function generanumerosecreto(){
    let numerosecreto = Math.floor(Math.random()*10)+1;
    console.log(numerosecreto)
    return numerosecreto;
}

function reiniciarJuego(){
    //limpiar caja.
   limpiarCaja();
    //indicar el mensaje.
    //Generar un nuevo numero aleatorio.
    //Desavilitar el el boton de reinicio.
    condicionesIniciales()
    //Inicair el numero.
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();
