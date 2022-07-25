/* Bucles

while(condicion logica){
    todas las lineas de codigo de lo que quiero que repita  el programa
    cambiar la condicion logica para no tener un bucle infinito
}

*/

// let cantidad = 1;

// while(cantidad <= 20){
//     document.write("<br> preparar mate y pasar al siguiente compañero, mate cebado n "+ cantidad);
//     cantidad++ // cantidad = cantidad+1;
// }

/* Bucle Do-while hacer... mientras. Ejecuta el bucle al menos una vez
do{
todo el codigo que quiero ejecutar x cantidad de veces
cambiar condicion logica
} while(condicion logica)
*/

// let mate = 1;
// do{
//     document.write("<br> preparar mate y pasar al siguiente compañero, mate cebado n "+ mate);
//     mate++
// }while (mate <=20)

/* bucle FOR se ejecuta si la condicion logica se cumple si o si
for(inicializar la variable; condicion logica; incrementar o decrementar la variable declarada al principio){
    todo el codigo a ejecutar repetidas veces
} 
*/

for(let mate = 1; mate <= 20; mate++){
    document.write("<br> preparar mate y pasar al siguiente compañero, mate cebado n "+ mate);    
}