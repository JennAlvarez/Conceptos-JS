// Ingresar un num de DNi entre 0 y 99999999/
// calcular el resto de la división entera entre el número y el número 23/
// el resultado entre 0 y 22 corresponde a una de las siguientes letras T, R, W, A, G, M, Y, F, P, D, X,
//  B, N, J, Z, S, Q, V, H, L, C, K, E/
// si el dni cargado no es un num mostrar en un alert/
// repetir todo hasta presionar cancelar


do{
    let numero = parseInt(prompt("Ingrese DNI (entre 0 y 99999999)"));
console.log(numero);

if(numero >= 0 && numero <= 99999999){

    let resultado = numero % 23;
    console.log (resultado);
    
    switch(resultado){
        case 0:
            document.write("La letra que corresponde a su DNI es la letra T, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra T, DNI ingresado "+ numero);
            break;
        case 1:
            document.write("La letra que corresponde a su DNI es la letra R, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra R, DNI ingresado "+ numero);
            break;
        case 2:
            document.write("La letra que corresponde a su DNI es la letra W, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra M, DNI ingresado "+ numero);
            break;
        case 3:
            document.write("La letra que corresponde a su DNI es la letra A, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra A, DNI ingresado "+ numero);
            break;
        case 4:
            document.write("La letra que corresponde a su DNI es la letra G, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra G, DNI ingresado "+ numero);
            break;
        case 5:
            document.write("</br> La letra que corresponde a su DNI es la letra M, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra M, DNI ingresado "+ numero);
            break;
        case 6:
            document.write("</br> La letra que corresponde a su DNI es la letra Y, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra Y, DNI ingresado "+ numero);
            break;
        case 7:
            document.write("</br> La letra que corresponde a su DNI es la letra F, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra F, DNI ingresado "+ numero);
            break;
        case 8:
            document.write("</br> La letra que corresponde a su DNI es la letra P, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra P, DNI ingresado "+ numero);
            break;
        case 9:
            document.write("</br> La letra que corresponde a su DNI es la letra D, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra D, DNI ingresado "+ numero);
            break;
        case 10:
            document.write("</br> La letra que corresponde a su DNI es la letra X, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra X, DNI ingresado "+ numero);
            break;
        case 11:
            document.write("</br> La letra que corresponde a su DNI es la letra B, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra B, DNI ingresado "+ numero);
            break;
        case 12:
            document.write("</br> La letra que corresponde a su DNI es la letra N, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra N, DNI ingresado "+ numero);
            break;
        case 13:
            document.write("</br> La letra que corresponde a su DNI es la letra J, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra J, DNI ingresado "+ numero);
            break;
        case 14:
            document.write("</br> La letra que corresponde a su DNI es la letra Z, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra Z, DNI ingresado "+ numero);
            break;
        case 15:
            document.write("</br> La letra que corresponde a su DNI es la letra S, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra S, DNI ingresado "+ numero);
            break;
        case 16:
            document.write("</br> La letra que corresponde a su DNI es la letra Q, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra Q, DNI ingresado "+ numero);
            break;
        case 17:
            document.write("</br> La letra que corresponde a su DNI es la letra V, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra V, DNI ingresado "+ numero);
            break;
        case 18:
            document.write("</br> La letra que corresponde a su DNI es la letra H, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra N, DNI ingresado "+ numero);
            break;
        case 19:
            document.write("</br> La letra que corresponde a su DNI es la letra L, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra L, DNI ingresado "+ numero);
            break;
        case 20:
            document.write("</br> La letra que corresponde a su DNI es la letra C, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra C, DNI ingresado "+ numero);
            break;
        case 21:
            document.write("</br> La letra que corresponde a su DNI es la letra K, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra K, DNI ingresado "+ numero);
            break;
        case 22:
            document.write("</br> La letra que corresponde a su DNI es la letra E, DNI ingresado "+ numero);
            alert("La letra que corresponde a su DNI es la letra E, DNI ingresado "+ numero);
            break;
        default:
            alert("Ingresaste un valor erroneo");
    }
}else{
    alert('Ingresó un valor erroneo');
}
}while(confirm('Desea ingresar un DNI?'));


