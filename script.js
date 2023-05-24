/*
Escriba un programa que dados la distancia recorrida por un objeto y el tiempo que tomó el objeto en recorrer esa distancia, calcule su velocidad.
*/


function calcularVelocidad(distanciaEnMetros, tiempoEnSegundos){

    var velocidad =distanciaEnMetros/tiempoEnSegundos;
    console.log("La velocidad es "+velocidad+"m/s");
}

calcularVelocidad(10,5);