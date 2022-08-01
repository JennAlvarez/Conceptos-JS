// pedir al usuario filas y un numero de columnas
// dibujar una tabla 
// cada celda debe tener un numero descendente de multiplicar filas por columnas

let filas = parseInt(prompt("Ingrese una cantidad de filas"));
let columnas = parseInt(prompt("Ingrese una cantidad de columnas"));

document.write(`<table> <tbody>`);

// se encarga de dibujar las filas
for(let indiceFila = 0; indiceFila < filas; indiceFila++){
    document.write(`
        <tr>
            <td>prueba</td>
            <td>datos</td>
        </tr>`);
}

document.write(`</tbody> </table>`);