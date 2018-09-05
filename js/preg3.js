var  Campname;
var campResul;
var primerN;
var segundoN;
var tercerN;
var cuartoN;
var sumaR;
var multiR;

function funcion(){


  Campname = document.getElementsByName("valor");
  campResul = document.getElementsByName("result");



primerN =  parseFloat(Campname[0].value);
segundoN = parseFloat(Campname[1].value);
tercerN = parseFloat(Campname[2].value);
cuartoN = parseFloat(Campname[3].value);

sumaR = primerN + segundoN;
multiR = tercerN * cuartoN;

campResul[0].value = sumaR;
campResul[1].value = multiR;
}
