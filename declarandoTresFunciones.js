// Escribir las siguientes tres funciones:

// anterior: recibe un número como parámetro y devuelve ese número menos uno.
// triple: recibe un número como parámetro y devuelve el triple de ese número.
// anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).

function anterior(decremento){
    return decremento -1;
}
//anterior(10);

function triple(numeroTresVeces){
    return numeroTresVeces * 3;
}
//triple(3);

function anteriorDelTriple(n){
    let multiplicacion = triple(n);
    return anterior(multiplicacion);
}
console.log(anteriorDelTriple(5));