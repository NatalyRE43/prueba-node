//Contabiliza el total de la suma de los elementos del array
let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce(function(counter, number){
    return counter + number;
});