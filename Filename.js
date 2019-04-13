document.body.style.background="black";
var func=function (){
	var div=document.createElement("div");
	document.body.appendChild(div);
	div.style.width=200+"px";
	div.style.height=200+"px";
	div.style.background="lightgreen";
	div.style.position="absolute";
	div.style.top=Math.round(Math.random()*innerHeight)-200+"px";
	div.style.left=Math.round(Math.random()*innerWidth)-200+"px";
	div.onclick=function (){
		this.style.display="none";
	}
}
setInterval(func,1000);
