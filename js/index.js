function MostrarMeses() {
const Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(Meses)
}

function EjercicioN2() {
var valores = [true, 5, false, "hola", "adios",
2];
    var suma = (valores[1] + valores[5]);
    var resta = (valores[1] - valores[5]);
    var multiplicacion = (valores[1] * valores[5]);
    var division = (valores[1] / valores[5]);
    var potencia = (valores[1]**valores[5]);
    var mayor = (valores[4] > valores[3]);

    if(valores[3].length>valores[4].length)
    {
        console.log("La afirmación es:", valores[2]);
    }

    else if(valores[3].length<valores[4].length)
    {
        console.log("La afirmación es:", valores[0]);
    }


    console.log("Suma: ", suma);
    console.log("Resta: ", resta);
    console.log("Multiplicacion: ", multiplicacion);
    console.log("División: ", division);
    console.log("Potencia: ", potencia);

    
}

function EjercicioN3() {

var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 !== 0) {
console.log("numero1 es negativo o distinto de cero");
}
if(numero1++ <= numero2)
     {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
}

function EjercicioN4() {

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

    var dni = prompt("escriba su DNI: ");

    if(dni == null ||isNaN(dni) || dni == "" || dni < 0 || dni > 99999999)
    {
        console.log("El número proporcionado no es válido");
    }

    else{
        var resto = dni % 23;

        console.log("Resto: ", resto);
        console.log("Letra: ", letras[resto]);
    }
}
