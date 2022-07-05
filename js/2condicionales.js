/* Estructura if ( SI hago algo sucede tal cosa)

if(condicion logica){
    todo el codigo de lo que quiero realizar si la respuesta es verdadera o true o si se cumple la condicion logica
} else{
    Ponemos lo que queremos hacer si no se cumple la condicion
}
*/

let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));
// si el primer numero es mayor se imprime if en la pantalla y else si no se cumole la condicion
if (numero1 > numero2) {
  document.write("El primer numero es el mayor " + numero1);
} /*else{
    if(numero1==numero2){
    document.write("ambos numeros son iguales "+ numero1);
} else{
    document.write("El segundo numero es el mayor "+ numero2)
}
} camino largo*/ else if (numero1 == numero2) {
  document.write("ambos numeros son iguales " + numero1);
} else {
  document.write("El segundo numero es el mayor " + numero2);
}
