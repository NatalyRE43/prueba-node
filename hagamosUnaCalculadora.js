/*Creemos cuatro funciones que realicen las operaciones principales de una calculadora. Nuestro trabajo será definir la función suma, resta, multiplicacion y division. Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros, y así sucesivamente.
Ahora sí, con esas funciones ya definidas, creemos la función calculadora. Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.
 */
function suma(numero1,numero2){
    return numero1+numero2;
}
function resta(numero1,numero2){
    return numero1-numero2;
}
function multiplicacion(numero1,numero2){
    return numero1*numero2;
}
function division(numero1,numero2){
    return numero1/numero2;
}
function calculadora(numero1,numero2,suma){
    return suma(numero1,numero2);
}