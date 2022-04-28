let saludo = () => 'Hola Mundo!'; /*Función arrow sin parámetros 
Requiere de los paréntesis para iniciarse*/

let doble = numero => numero * 2; /* Función arrow con un único parámetro
(no necesitamos los paréntesis paara indicarlo y con un return implícito*/

let suma = (a,b) => a + b; /* Función arrow con dos parámetros
Necesita de los paréntesis y tiene un return implícito
 */

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' +
    fecha.getMinutes(); /* Función arrow sin paámetros y con un return explícito
    En este caso hacemos uso de las llaves y del return ya que la lógica de esta 
    función se desarrolla en más de una línea de código*/
}