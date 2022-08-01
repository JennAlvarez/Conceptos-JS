let estacion = parseInt(
  prompt(
    "Ingresa tu estacion del a;o favorita: 1-verano, 2-otoño, 3-primevera, 4-invierno"
  )
);

// if(estacion == 1){
//     document.write('Helado')
// }else if (estacion == 2){
//     document.write("Locro")
// }else if(estacion == 3){
//     document.write("Cerveza")
// }else if(estacion == 4){
//     document.write("Chocolate")
// }else{
//     document.write("Ingresaste una opcion incorrecta")
// }

/* la estructura switch se usa para las opciones de menu donde podemos tener varias opciones 

switch(opcion){
    case 1:
        todas las lineas de codigo en el caso de que el usuario seleccione 1
        ..
        break;
    case 2:
        todas las lineas de codigo en el caso de que el usuario seleccione 2
        ..
        break;
    case 3:
        todas las lineas de codigo en el caso de que el usuario seleccione 3
        ..
        break;
    default:
        todas las lineas de codigo en el caso de que el usuario ingrese una opcion erronea 
}
*/

switch (estacion) {
  case 1:
    document.write("Helado");
    break;
  case 2:
    document.write("Locro");
    break;
  case 3:
    document.write("Cerveza");
    break;
  case 4:
    document.write("Chocolate");
    break;

  default:
    document.write("Ingresaste una opcion incorrecta");
}
