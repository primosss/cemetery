var canvas, ctx, canvasAlto, canvasAncho, windowAlto, windowAncho;
var conteo, div;
var gameIntervalo, conteoIntervalo;
var tumbas = {
	t1: {x:0, y:0},
	t2: {x:0, y:0},
	t3: {x:0, y:0},
	t4: {x:0, y:0},
	t5: {x:0, y:0},
	t6: {x:0, y:0},
	w:0, h:0
};
var tumExist = {
	t1: false,
	t2: false,
	t3: false,
	t4: false,
	t5: false,
	t6: false
};
var score=0, nuevo=1000;

function iniciar() {
	canvas = document.getElementById('game');
  ctx = canvas.getContext("2d");

	borrar();

  canvasAncho = windowAncho;
  canvasAlto = windowAlto;

  conteo = 4;
  div =document.getElementById("texto");

  div.innerHTML="3";
  div.style.fontSize = "8em";
  div.style.top=((canvasAlto/4))+"px";
  div.style.left=((canvasAncho/2)-(div.style.width/2))+"px";

  conteoIntervalo = setInterval(function() { regresion(div); }, 1000);
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
	score = 0;
	ctx.clearRect(0, 0, canvasAncho, canvasAlto);

	clearInterval(conteoIntervalo);
	clearInterval(gameIntervalo);
}

function start() {
	div.style.top = "0px";
	div.style.left = "30px";
	div.style.fontSize = "2em";
	div.innerHTML  = "Score 0";

	//Posición tumbas
	tumbas.t2.x= canvasAncho/2;
	tumbas.t5.x= tumbas.t2.x;
	tumbas.t1.x= tumbas.t2.x/2;
	tumbas.t4.x= tumbas.t1.x;
	tumbas.t3.x= tumbas.t1.x+tumbas.t2.x;
	tumbas.t6.x= tumbas.t3.x;

	tumbas.t1.y= canvasAlto/4;
	tumbas.t2.y= tumbas.t1.y;
	tumbas.t3.y= tumbas.t1.y;
	tumbas.t4.y= tumbas.t1.y*2.5;
	tumbas.t5.y= tumbas.t4.y;
	tumbas.t6.y= tumbas.t4.y;

	tumbas.w= tumbas.t1.y*1.5;
	tumbas.h= tumbas.t1.y;

	tumbas.t1.x-= tumbas.w/2;
	tumbas.t2.x-= tumbas.w/2;
	tumbas.t3.x-= tumbas.w/2;
	tumbas.t4.x-= tumbas.w/2;
	tumbas.t5.x-= tumbas.w/2;
	tumbas.t6.x-= tumbas.w/2;
	//gameIntervalo = setInterval(function() {loop();}, 10/3);

	//Prueba
	gameIntervalo = setInterval(function() { prueba(); }, 1000);

}
var cont=0;

function prueba() {
	ctx.clearRect(0, 0, canvasAncho, canvasAlto);

	cont= Math.floor((Math.random()*6)+1);

	if (cont==1){ draw(tumbas.t1, tumbas); tumExist.t1=true; tumExist.t2=tumExist.t3=tumExist.t4=tumExist.t5=tumExist.t6=false; }	
	else if (cont==2){ draw(tumbas.t2, tumbas); tumExist.t2=true; tumExist.t1=tumExist.t3=tumExist.t4=tumExist.t5=tumExist.t6=false; }
	else if (cont==3){ draw(tumbas.t3, tumbas); tumExist.t3=true; tumExist.t1=tumExist.t2=tumExist.t4=tumExist.t5=tumExist.t6=false; }
	else if (cont==4){ draw(tumbas.t4, tumbas); tumExist.t4=true; tumExist.t1=tumExist.t2=tumExist.t3=tumExist.t5=tumExist.t6=false; }
	else if (cont==5){ draw(tumbas.t5, tumbas); tumExist.t5=true; tumExist.t1=tumExist.t2=tumExist.t3=tumExist.t4=tumExist.t6=false; }
	else { draw(tumbas.t6, tumbas); cont=0; tumExist.t6=true; tumExist.t1=tumExist.t2=tumExist.t3=tumExist.t4=tumExist.t5=false; }
}

function clickObjeto(ox, oy) {

	if(tumbas.t1.x+tumbas.w>ox && tumbas.t1.x<ox &&
		tumbas.t1.y+tumbas.h>oy && tumbas.t1.y<oy && tumExist.t1==true){
		score+=1;
	}
	if(tumbas.t2.x+tumbas.w>ox && tumbas.t2.x<ox &&
		tumbas.t2.y+tumbas.h>oy && tumbas.t2.y<oy && tumExist.t2==true){
		score+=1;
	}
	if(tumbas.t3.x+tumbas.w>ox && tumbas.t3.x<ox &&
		tumbas.t3.y+tumbas.h>oy && tumbas.t3.y<oy && tumExist.t3==true){
		score+=1;
	}
	if(tumbas.t4.x+tumbas.w>ox && tumbas.t4.x<ox &&
		tumbas.t4.y+tumbas.h>oy && tumbas.t4.y<oy && tumExist.t4==true){
		score+=1;
	}
	if(tumbas.t5.x+tumbas.w>ox && tumbas.t5.x<ox &&
		tumbas.t5.y+tumbas.h>oy && tumbas.t5.y<oy && tumExist.t5==true){
		score+=1;
	}
	if(tumbas.t6.x+tumbas.w>ox && tumbas.t6.x<ox &&
		tumbas.t6.y+tumbas.h>oy && tumbas.t6.y<oy && tumExist.t6==true){
		score+=1;
	}

	div.innerHTML = "Score "+score;

	if(score>=300 && nuevo==500){
		clearInterval(gameIntervalo);
		gameIntervalo = setInterval(function() { prueba(); }, 200);
	}else if(score>=200 && nuevo==800){
		clearInterval(gameIntervalo);
		gameIntervalo = setInterval(function() { prueba(); }, 500);
	}else if(score>=100 && nuevo==1000){
		clearInterval(gameIntervalo);
		gameIntervalo = setInterval(function() { prueba(); }, 800);
	}
}

function reanudar() {
	gameIntervalo = setInterval(function() { prueba(); }, 1000);
}

function pausar() {
	clearInterval(gameIntervalo);
}

function loop() {
	
}

draw = function (t, tw) {
	
  ctx.save();
  
  //ctx.drawImage(opersonaje, 112, 190, (this.halfWidth*2)*SCALE, (this.halfHeight*2)*SCALE, 
  // (this.x-this.halfWidth)*SCALE, (this.y-this.halfHeight)*SCALE, (this.halfWidth*2)*SCALE, (this.halfHeight*2)*SCALE);
  
  ctx.fillStyle = "black";
  ctx.fillRect(t.x,
               t.y,
               tw.w,
               tw.h);
  
  ctx.restore();

}
