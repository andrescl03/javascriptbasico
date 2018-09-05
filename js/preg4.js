var nombC;
var precio;
var cantidad;
var resultado;
var Entrada = document.getElementsByName('entrada');
var Salida = document.getElementsByName('salida');


function funcion(){
nombC = Entrada[0].value;
precio = parseFloat(Entrada[1].value);
cantidad = parseInt(Entrada[2].value);

resultado = precio*cantidad;

Salida[0].value =  nombC + " debe abonar: " +  resultado;

}
