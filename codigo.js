function dibujarLinea(color, linewidth, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = linewidth;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujargrilla(){
    dibujarLinea("black", 5, 0, 0, 300, 0);
    dibujarLinea("black", 5, 300, 0, 300, 300);
    dibujarLinea("black", 5, 300, 300, 0, 300);
    dibujarLinea("black", 5, 0, 300, 0, 0);
    
    dibujarLinea("black", 1, 0, 50, 300, 50);
    dibujarLinea("black", 1, 0, 100, 300, 100);
    dibujarLinea("black", 1, 0, 150, 300, 150);
    dibujarLinea("black", 1, 0, 200, 300, 200);
    dibujarLinea("black", 1, 0, 250, 300, 250);
    
    lienzo.font = "12px Arial";
    lienzo.fillText("50", 5, 249);
    lienzo.fillText("100", 5, 199);
    lienzo.fillText("150", 5, 149);
    lienzo.fillText("200", 5, 99);
    lienzo.fillText("250", 5, 49);
}

// solicita el nombre de usuario
var usuario = prompt("Ingrese su Nombre");
// selección del planeta a evaluar
var planeta = parseInt(prompt("Elige el planeta. 1 es Marte, 2 es Jupiter"));
var pl;
const g_tierra = 9.8;
const g_marte = 3.7;
const g_jupiter = 24.8;
var peso = parseFloat(prompt("Ingrese su Peso"));
var peso_final;
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

// dibuja la grilla de 300x300
dibujargrilla(); 

// evalua si el planeta seleccionado fue marte
if (planeta == 1) {
  peso_final = (peso * g_marte) / g_tierra;
  peso_final = peso_final.toFixed(1); 
  pl = "Marte";
  document.write(
    "<center>Hola " +
      usuario +
      "!, Tu peso en " +
      pl +
      " es <strong>" +
      peso_final +
      " kilos</strong></center>"
  );
//   dibuja la grafica de los valores obtenidos en el canvan
  dibujarLinea("#59ed2f", 50, 100,300,100,(300-peso));
  dibujarLinea("#75a3e0", 50, 200,300,200,(300-peso_final));
  lienzo.fillText("Tierra", 85, 298);
  lienzo.fillText("Marte", 185, 298);
  lienzo.fillText(peso, 95, (290-peso));
  lienzo.fillText(peso_final, 190, (290-peso_final));
  
//   evalua si el planeta seleccionado fue jupiter
} else if (planeta == 2) {
  peso_final = (peso * g_jupiter) / g_tierra;
  peso_final = peso_final.toFixed(1);
  pl = "Jupiter";
  document.write(
    "<center>Hola " +
      usuario +
      "!, Tu peso en " +
      pl +
      " es <strong>" +
      peso_final +
      " kilos</strong></center>"
  );
  //dibuja en el canvan la grafica con los valores obtenidos.
  dibujarLinea("#59ed2f", 50, 100,300,100,(300-peso));
  dibujarLinea("#e075dc", 50, 200,300,200,(300-peso_final));
  lienzo.fillText("Tierra", 85, 298);
  lienzo.fillText("Jupiter", 182, 298);
  lienzo.fillText(peso, 95, (290-peso));
  lienzo.fillText(peso_final, 185, (290-peso_final));
}
// datos ingresados para el planeta son incorrectos 
else {
  document.write(
    "<center>Datos Incorrectos, Seleccione el planeta adecuado. 1 es Marte, 2 es Jupiter</center>"
  );
}

// peso_final = (peso * g_marte)/g_tierra;
// peso_final = peso_final.toFixed(2);
// document.write("Hola " + usuario + ", Tu peso en " + pl + " es <strong>" + peso_final + " kilos</strong>");
