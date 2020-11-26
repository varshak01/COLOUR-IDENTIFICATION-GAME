var numofsq=6;
var message=document.querySelector("#message");
var colors=generaterandomcolors(numofsq);
var pickedcolor=pickcolor();
var colordisplay=document.querySelector("#colordisplay");
colordisplay.textContent=pickedcolor;
var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var stripe=document.querySelector("#stripe");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	numofsq=3;
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	colors=generaterandomcolors(numofsq);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i =0; i <squares.length; i++) {
   	if(colors[i]){
   		squares[i].style.backgroundColor=colors[i];
   	}
    else
    	squares[i].style.display="none";
   }
});
hardbtn.addEventListener("click",function(){
	numofsq=6;
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	colors=generaterandomcolors(numofsq);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i =0; i <squares.length; i++) {
   	   		squares[i].style.backgroundColor=colors[i];
   	   		squares[i].style.display="block";
   	}

});


for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
     var clickedcolor=this.style.backgroundColor;
     if(pickedcolor===clickedcolor)
     {
     	message.textContent="CORRECT!";
     	for(var j=0;j<squares.length;j++)
     	{
     		squares[j].style.backgroundColor=clickedcolor;
     	}
        h1.style.backgroundColor=clickedcolor;
        reset.textContent="PLAY AGAIN!"
     }
     else
     {
     	message.textContent="TRY AGAIN!";
     	this.style.backgroundColor="#232323";
     }
	});
}
function pickcolor() {
	var random=Math.floor(Math.random()*(colors.length-1)+1);
	return colors[random];
}
function generaterandomcolors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr[i]=randomcolors();
	}
	return arr;
}
function randomcolors(){
	var color1=Math.floor(Math.random()*255+1);
		var color2=Math.floor(Math.random()*255+1);
		var color3=Math.floor(Math.random()*255+1);
		return "rgb("+color1+", "+color2+", "+color3+")";
}
reset.addEventListener("click",function(){
	this.textContent="NEW COLORS";
   colors=generaterandomcolors(numofsq);
   pickedcolor=pickcolor();
   message.textContent="";
   colordisplay.textContent=pickedcolor;
   for (var i =0; i <squares.length; i++) {
   	squares[i].style.backgroundColor=colors[i];
   }
h1.style.backgroundColor="steelblue";
});