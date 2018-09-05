var ladoC = 0;
var resultado = 0;

function funcion(){

 ladoC = parseInt(document.getElementsByName("inp1")[0].value);
 resultado = ladoC*4;

alert("el perimetro del cuadrado con lado " + ladoC + " es: " + resultado);

}
