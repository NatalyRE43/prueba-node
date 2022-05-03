const fs = require('fs');
const { argv } = require('process');
let tareasJson = JSON.parse(tareas);

const accion = process.argv[2];

switch (accion){
    case "listar":
        console.log(tareasJson);
        break;
}