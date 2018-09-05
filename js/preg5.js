var Entrada = document.getElementsByName('entrada');
var Salida =  document.getElementsByName('resultado');
var primerN;
var segundoN;
var tipoR;
var primerR;
var segundoR;

function funcion(){

primerN = parseFloat(Entrada[0].value);
segundoN = parseFloat(Entrada[1].value);


if(primerN > segundoN){
   Salida[0].value= "El primero es mayor al segundo";
   Salida[1].value = primerN +segundoN;
   Salida[2].value = primerN - segundoN;
}

else if(primerN == segundoN){
     Salida[0].value= "No pueden ser iguales";
     Salida[1].value ="";
     Salida[2].value = "";
}
else{
Salida[0].value= "El segundo es mayor al primero";
Salida[1].value = primerN *segundoN;
Salida[2].value = primerN / segundoN;
}

}
