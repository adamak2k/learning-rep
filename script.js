var y=0;
document.getElementById("timeplace").innerHTML=Date();
document.getElementById("losttime").innerHTML="You are "+y+" seconds on this page.";
document.getElementById("inputtext").value="";

setInterval(function Time(){
  document.getElementById("timeplace").innerHTML=Date();
}, 1000);

setInterval(function Time(){
  y=y+1;
  document.getElementById("losttime").innerHTML="You are "+y+" seconds on this page.";
}, 1000);

function getTextToReceived() {
  if(document.getElementById("inputtext").value==""){
    document.getElementById("received").innerHTML="nothing";
    document.getElementById("inputtext").value="";
  }else{
    document.getElementById("received").innerHTML=document.getElementById("inputtext").value;
    document.getElementById("inputtext").value="";
  }
}
