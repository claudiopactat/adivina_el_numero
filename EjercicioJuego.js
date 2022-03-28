var numRandom = setRandomArbitrary(1,50)
var intentosDisponibles = 7
var numAnteriores = []

function setRandomArbitrary(min, max){

    var number = Math.random() * (max - min) + min; //devuelve un numero aleatorio.. pero en forma de float
    number = Math.floor(number); //esto redondea un numero para abajo
    console.log('El numero random es: ' + number);

    return number
}


// Desde el html invocamos la siguiente funcion donde guardamos los datos ingresados
function numeroIngresado(){
    if(intentosDisponibles > 1){
        var numeroActual = document.getElementById("numero").value
        console.log(numeroActual)
    
        if(numeroActual == numRandom){
            alert('FELICITACIONES!! Ganaste !!')
            location.reload()
        } else if (numeroActual < numRandom){
            alert('El numero es mayor !!')
        } else if (numeroActual > numRandom){
            alert('El numero es menor !!')
        }
    
        intentosDisponibles--

        // Vamos refrescando el contador de intentos
        document.getElementById("intentos").innerText = "Intentos restantes: " + intentosDisponibles       

        numAnteriores.push(numeroActual)
        console.log(numAnteriores)

        document.getElementById("numAnteriores").innerText = " " + numAnteriores 

    } else if(intentosDisponibles == 1 && numeroActual == numRandom){
        alert('FELICITACIONES!! Ganaste !!')
        location.reload()

    } else {
        alert('PERDISTE !! El numero era: ' + numRandom)
        location.reload()
    }


}
