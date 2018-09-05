// Numero de enlaces de la pagina

  var enlaces = document.getElementsByTagName("a");

// Direccion del penultimo enlace

  var penultimo = enlaces[enlaces.length-2];

  // Numero de enlaces que apuntan a http://prueba
   var contador = 0;
   for(var i=0; i<enlaces.length; i++) {

     // Es necesario comprobar los enlaces http://prueba y     // http://prueba/ por las diferencias entre navegadores

     if(enlaces[i].getAttribute('href') == "http://prueba" ||    enlaces[i].getAttribute('href') == "http://prueba/")
     {
       contador++;
     }
   }

  // Numero de enlaces del tercer párrafo
  var parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a");

  //mostrar reporte en el documento
  document.write("Reporte: "+
  "<br>Numero de enlaces en la pagina = "+enlaces.length+
  "<br>El penultimo enlace apunta a: "+penultimo.getAttribute('href')+
  "<br>"+contador + " enlaces apuntan a http://prueba"+
  "<br>Numero de enlaces del tercer parrafo = "+enlaces.length);

  var cantidad=document.getElementsByTagName("p");
   document.write("<br>Cantidad de parrafos: "+enlaces.length);
  document.write("<br>texto del parrafo 1: <br>"+    document.getElementsByTagName("p")[0].innerText);
