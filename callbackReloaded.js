function agregarHttp(url) {
    return 'http://' + url;
}

function procesar(arreglo,callback){
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
    let liga = [];
    for (let i = 0; i <= arreglo.length; i++){
        liga.push(callback(arreglo[i]));
    }
    return liga;
}