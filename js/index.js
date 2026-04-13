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

    var dni = prompt("Escriba su DNI: ");
    var letradeDNI = prompt("Escriba la letra de su DNI: ");

    if(dni == null ||isNaN(dni) || dni == "" || dni < 0 || dni > 99999999)
    {
        console.log("El número proporcionado no es válido");
    }

    else{
        var resto = dni % 23;
        var LetraCorrecta = letras[resto]

        if(LetraCorrecta !== letradeDNI.toUpperCase())
        {
            console.log("La letra del DNI no coincide");
        }

        else{

            console.log("Resto: ", resto);
            console.log("Letra: ", LetraCorrecta);

            console.log("La letra y número del DNI coinciden");
        }
    }
}

function EjercicioN5() {

    var resultado = 1;

    var numero;

    numero = prompt("Ingrese un número ");

    if(numero == null || isNaN(numero) || numero == "" || numero == 0)
    {
        console.log("el caracter ingresado no es un número");
    }

    else{

    for (var i = 1; i <= numero; i++)
    {
        resultado = resultado * i;
    }
        console.log("el factorial es: ", resultado);
    }
}

function EjercicioN6() {

    var numero = prompt("Ingrese un número");

    if(isNaN(numero) || numero == null || numero == "")
    {
        document.writeln("No es un número")
    }

    else if(numero % 2 === 0)
    {
        document.writeln("El número ingresado es: ", numero);
        document.writeln("El numero es par")
    }

    else{
        document.writeln("El número ingresado es: ", numero);
        document.writeln("El numero es impar")
    }

}

function EjercicioN7() {
    var texto = prompt("Ingrese algún texto: ");

    if(!isNaN(texto))
    {
        console.log("el texto debe contener en su mayoría letras");
    }

    else if(texto == texto.toUpperCase())
    {   
        console.log("el texto ingresado es:", texto);
        console.log("El texto está formado por mayúsculas");
    }

    else if(texto == texto.toLowerCase())
    {
        console.log("el texto ingresado es:", texto);
        console.log("El texto está formado por minúsculas");
    }

    else {
        console.log("el texto ingresado es:", texto);
        console.log("El texto está formado por mayúsculas y minúsculas");
    }
}

function EjercicioN8() {

    let texto = prompt("Ingrese un texto: ");
    let str = texto.replaceAll(" "," ").toLocaleLowerCase();
    let arrStr = str.split("").reverse().join("");
    
    if( str == arrStr){
        console.log("El texto ingresado es: ", texto);
        console.log("El texto ingresado es un palíndromo");
    }
    else{
        console.log("El texto ingresado es: ", texto);
        console.log("El texto ingresado no es un palíndromo");
    }
}

function EjercicioN9() {
    let p1 = new Estudiante("Mateo", 16, "Masculino", "4°", "15°")
    console.log(p1.obtDetalles())
    console.log(p1.registrar())

    let p2 = new Profesor("Mauro", 67, "Masculino", "Lengua", "Secundario")
    console.log(p2.obtDetalles())
    console.log(p2.asignar())

}

    /* PERSONA */
    function Persona(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    Persona.prototype.obtDetalles = function(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Genero: ${this.genero}`);
    };

     /* ESTUDIANTE */
    function Estudiante(nombre, edad, genero, curso, grupo){
        Persona.call(this, nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    Estudiante.prototype = Object.create(Persona.prototype);
    Estudiante.prototype.constructor = Estudiante;

    Estudiante.prototype.registrar = function(){
        console.log(`${this.nombre} ha sido registrado en el curso ${this.curso} y grupo: ${this.grupo}`);
    }

      /* PROFESOR */
    function Profesor(nombre, edad, genero, asignatura, nivel){
        Persona.call(this, nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    
    Profesor.prototype = Object.create(Persona.prototype);
    Profesor.prototype.constructor = Profesor;
    
    Profesor.prototype.asignar = function(){
        console.log(`${this.nombre} ha sido asignado a la asignatura ${this.asignatura} y nivel ${this.nivel}`);
    }


function EjercicioN10() {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(var i = 0; i < 36000; i++)
    {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let suma = dado1 + dado2;
        arr[suma] = arr[suma] + 1;
    }

    console.log(arr);

    for(let j = 2; j < 13; j++)
    {
        console.log("El numero " + j + " salió: "+ arr[j]+ " veces en total.");
    }
}