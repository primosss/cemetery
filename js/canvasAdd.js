var canvas, ctx, canvasAlto, canvasAncho;
var conteo, div;
var gameIntervalo, conteoIntervalo;
var tumbas = {t1: {x:0, y:0},
							t2: {x:0, y:0},
							t3: {x:0, y:0},
							t4: {x:0, y:0},
							t5: {x:0, y:0},
							t6: {x:0, y:0},
							w:0, h:0};

var score=0;

function iniciar() {
	borrar();

	canvas = document.getElementById('game');
  ctx = canvas.getContext("2d");

  canvasAncho = 1200;//ctx.width;
  canvasAlto = 600;//ctx.height;

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

	cont++;

	if (cont==1){ draw(tumbas.t1, tumbas);}	
	else if (cont==2){ draw(tumbas.t2, tumbas);}
	else if (cont==3){ draw(tumbas.t3, tumbas);}
	else if (cont==4){ draw(tumbas.t4, tumbas);}
	else if (cont==5){ draw(tumbas.t5, tumbas);}
	else { draw(tumbas.t6, tumbas); cont=0;}
}

function clickObjeto(ox, oy) {
	ox = (ox - canvas.getBoundingClientRect().left);
  oy = (oy - canvas.getBoundingClientRect().top);


	if(tumbas.t1.x+tumbas.w>ox && tumbas.t1.x<ox &&
		tumbas.t1.y+tumbas.h>oy && tumbas.t1.y<oy ){
		console.log("Primer objeto");
		score+=1;
	}
	if(tumbas.t2.x+tumbas.w>ox && tumbas.t2.x<ox &&
		tumbas.t2.y+tumbas.h>oy && tumbas.t2.y<oy ){
		console.log("Segundo objeto");
		score+=1;
	}
	if(tumbas.t3.x+tumbas.w>ox && tumbas.t3.x<ox &&
		tumbas.t3.y+tumbas.h>oy && tumbas.t3.y<oy ){
		console.log("Tercero objeto");
		score+=1;
	}
	if(tumbas.t4.x+tumbas.w>ox && tumbas.t4.x<ox &&
		tumbas.t4.y+tumbas.h>oy && tumbas.t4.y<oy ){
		console.log("Cuarto objeto");
		score+=1;
	}
	if(tumbas.t5.x+tumbas.w>ox && tumbas.t5.x<ox &&
		tumbas.t5.y+tumbas.h>oy && tumbas.t5.y<oy ){
		console.log("Quinto objeto");
		score+=1;
	}
	if(tumbas.t6.x+tumbas.w>ox && tumbas.t6.x<ox &&
		tumbas.t6.y+tumbas.h>oy && tumbas.t6.y<oy ){
		console.log("Sexto objeto");
		score+=1;
	}

	div.innerHTML = "Score "+score;
}

function reanudar() {

}

function pausar() {

}

function loop() {
	
}

draw = function (t, tw) {
	
  ctx.save();
  //if (this.id == 0) {
    //ctx.drawImage(opersonaje, 112, 190, (this.halfWidth*2)*SCALE, (this.halfHeight*2)*SCALE, 
     // (this.x-this.halfWidth)*SCALE, (this.y-this.halfHeight)*SCALE, (this.halfWidth*2)*SCALE, (this.halfHeight*2)*SCALE);
  //}else{
    ctx.fillStyle = "black";
    ctx.fillRect(t.x,
                 t.y,
                 tw.w,
                 tw.h);
  //}
  ctx.restore();

}

/* ---- INPUT ----------------------------- */
    /*var mouseX, mouseY, isMouseDown;
    
    canvas.addEventListener("mousedown", function(e) {
    	clickObjeto(e.clientX, e.clientY);
       //isMouseDown = true;
       //handleMouseMove(e);
       //document.addEventListener("mousemove", handleMouseMove, true);
    }, true);
    
    document.addEventListener("mouseup", function() {
       // if (!isMouseDown) return;
       //document.removeEventListener("mousemove", handleMouseMove, true);
       //isMouseDown = false;
       //mouseX = undefined;
       //mouseY = undefined;
    }, true);*/
    
    /*function handleMouseMove(e) {
       mouseX = (e.clientX - canvas.getBoundingClientRect().left) / SCALE;
       mouseY = (e.clientY - canvas.getBoundingClientRect().top) / SCALE;
    };*/

/*
Math.floor((Math.random()*10)+1);
*/
