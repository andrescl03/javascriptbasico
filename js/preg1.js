
var nota1 ;
var nota2 ;
var nota3 ;
var resultado;


function funcion(){

  campo = document.getElementsByName("Ventrada");
  nota1  = parseInt(campo[0].value);
  nota2  = parseInt(campo[1].value);
  nota3  = parseInt(campo[2].value);

  resultado = (nota1+nota2+nota3)/3;

  if(resultado>=11){
    alert("promovido con: " + resultado);
  }

  else{
    alert("no promovido con: " + resultado + "total de campos: " + campo.length);
  }
}
