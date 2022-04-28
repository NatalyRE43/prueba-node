/*Necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. 
 eberemos guardarlos en las variables aprobados y desaprobados respectivamente.
 */
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function(persona){
    return persona.aprobado == true;
});
let desaprobados = estudiantes.filter(function(persona){
    return persona.aprobado == false;
});