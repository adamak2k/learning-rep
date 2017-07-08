var y=0;
document.getElementById("timeplace").innerHTML=Date();
document.getElementById("losttime").innerHTML="You are "+y+" seconds on this page.";
function ZmianaKoloru(typ) {
  if(typ==1) document.getElementById("title123").setAttribute("style", "color:yellow; background-color:red;");
  if(typ==2) document.getElementById("title123").setAttribute("style", "color:blue; background-color:#77CCF1;");
  if(typ==3) document.getElementById("title1234").setAttribute("style", "color:yellow; background-color:red;");
  if(typ==4) document.getElementById("title1234").setAttribute("style", "color:blue; background-color:#77CCF1;");
}
function Test(type) {
	  if(type==1) document.getElementById("kek").setAttribute("style", "color:orange; background-color:black;");
    if(type==2) document.getElementById("kek").setAttribute("style", "color:black; background-color:coral;");
    if(type==3) document.getElementById("keke").setAttribute("style", "color:orange; background-color:black;");
    if(type==4) document.getElementById("keke").setAttribute("style", "color:black; background-color:coral;");
    if(type==5) document.getElementById("kekeke").setAttribute("style", "color:orange; background-color:black;");
    if(type==6) document.getElementById("kekeke").setAttribute("style", "color:black; background-color:coral;");
}

setInterval(function Time(){
  document.getElementById("timeplace").innerHTML=Date();
}, 1000);

setInterval(function Time(){
  y=y+1;
  document.getElementById("losttime").innerHTML="You are "+y+" seconds on this page.";
}, 1000);
