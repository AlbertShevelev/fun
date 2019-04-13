document.body.style.background="black";
var a=0;
var func=function (){
	var div=document.createElement("div");
	document.body.appendChild(div);
	div.style.width=200+"px";
	div.style.height=200+"px";
	div.style.background="green";
	div.style.position="absolute";
	div.style.top=Math.round(Math.random()*innerHeight)-100+"px";
	div.style.left=Math.round(Math.random()*innerWidth)-100+"px";
	div.onmousemove=function (){
		this.style.display="none";
		a++;
		console.log(a);
	}
}
setInterval(func,30);
