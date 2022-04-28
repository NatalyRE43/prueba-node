/*
Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.
La primera función se llamará doble. Esta recibirá un número y retornará el doble.
La segunda función se llamará triple. Esta recibirá un número y retornará el triple.
La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. 
Esta retornará el valor de aplicar dicha función al valor que recibió.
*/
function doble(numeroDoble){
    return numeroDoble * 2;
}

function triple(numeroTriple){
    return numeroTriple * 3;
}

function aplicarCallback(numero, numeroDoble){
    return numeroDoble(numero);
}