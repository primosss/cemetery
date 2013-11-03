var canvas, ctx, canvasAlto, canvasAncho;
var conteo, conteoIntervalo, div, gameIntervalo;

function iniciar() {
	borrar();
	canvas = document.getElementById('game');
  ctx = canvas.getContext("2d");
  conteo = 6;

  div =document.getElementById("texto");
  div.style.fontSize = (canvasAlto/4)+"px"
  div.style.top = (canvasAlto/5)+"px";
  div.style.left = (canvasAncho/2)+"px";

  conteoIntervalo = setInterval(function() { regresion(div); }, 1000);
	regresion(div);
}

function regresion(div) {
	conteo--;
	
	if(conteo>0){
		div.innerHTML=conteo;
	}else{
		div.innerHTML="";
		clearInterval(conteoIntervalo);
		start();
	}
}

function borrar() {
	clearInterval(conteoIntervalo);
}

function start() {
	/*div.style.top = "0px";
	div.style.left = (canvasAncho/32)+"px";
	div.style.fontSize = (canvasAlto/12)+"px";
	div.innerHTML  = "Score 10";
*/

	gameIntervalo = setInterval(function() {loop();}, 10/3)
}

function clickObjeto() {

}

function reanudar() {

}

function pausar() {

}

function loop() {
	
}

function redimensionar() {
	div.style.fontSize = (canvasAlto/4)+"px";
	div.style.top = (canvasAlto/5)+"px";
  div.style.left = (canvasAncho/2)+"px";
}
