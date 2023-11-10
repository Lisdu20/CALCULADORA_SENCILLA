// CALCULADORA SENCILLA

function suma() {
    let x = parseFloat(document.getElementById('numero1').value);
    let y = parseFloat(document.getElementById('numero2').value);
    let resultado = x + y;
    console.log(resultado);
}
function resta() {
    let x = parseFloat(document.getElementById('numero1').value);
    let y = parseFloat(document.getElementById('numero2').value);
    let resultado = x - y;
    console.log(resultado);

}
function multiplicacion() {
    let x = parseFloat(document.getElementById('numero1').value);
    let y = parseFloat(document.getElementById('numero2').value);
    let resultado = x * y;
    console.log(resultado);
}
function division() {
    let x = parseFloat(document.getElementById('numero1').value);
    let y = parseFloat(document.getElementById('numero2').value);
    let resultado = x/y;
    console.log(resultado);
}
suma( );
resta();
multiplicacion( );
division();
//Estructuras de control
//Condiciones
//Ciclos : whiles, do while, for

    // indice ; condicional ; incremento o decremento
// for (let index = 1; index < 6; index++) {
//     if (index== 3){
//         break;
//     }
//     console.log(index);
//     debugger;
// }
// console.log("Termina el ciclo");

//debugger es para hacer una pausa
// continue continua

//Funciones
//  parametro es una variable o variables, que van a introducirse a la funcion para hacer una funcion
// las funciones necesitan ser llamadas

// function suma (a,b,c){
//     return console.log(a,b,c);
// }

// const numero = [5,6,7]
// let resultadodefuncion = suma (... numero)
// console.log(resultadodefuncion)
// function funcionSaludar (nombre){

//     console.log("Hola" + nombre + " desde un arrow")
// };
// funcionSaludar('Lisandra');

// let hola = function (nombre){
//     console.log("Hola" + nombre + "Mundo anonimo")
// };
// hola('Lisandra');

// arrow function, function arrow, funciones flechas, lamba

// let holaArrow = (nombre) => console.log('Hola ' +nombre +' desde un arrow');

// holaArrow('Lisandra');
// function resta(a,b, function(){
//     console.log('hola lis')}){

// }
    // callback=funcionque se ejecuta dentro de otra funcion
