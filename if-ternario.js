// A la variable bicicletaConRodadoGrande debemos asignarle la bicicleta utilizando un operador 
// ternario. El operador ternario debe comparar los rodados de ambas bicicletas y retornar la que
// tenga el mayor rodado.
let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaB.rodado > bicicletaA.rodado ? bicicletaB : bicicletaA;
console.log(bicicletaConRodadoGrande);