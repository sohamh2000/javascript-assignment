
var i=0;
var images = ['red.jpg','yellow.jpg','blue.jpg','green.jpg','orange.jpg','white.jpg'];
function change(){
    var x = document.getElementById("time").value;
            document.getElementById("demo").src = images[i];
            if (i < images.length - 1 &&  x > 0) {
                i++;
            } else {
                i = 0;
            }
            setTimeout("change()", x);
}
function cal(si){
    var f=document.getElementById("first").value;
    var s=document.getElementById("second").value;
    if(isNaN(f) || isNaN(s)){
        document.getElementById("val").value="Invalid";
    }
    else{
        if(si=="+"){
            document.getElementById("val").value=parseInt(s)+parseInt(f);
        }
        else if(si=="-"){
            document.getElementById("val").value=parseInt(s)-parseInt(f);
        }
        else if(si=="/"){
            document.getElementById("val").value=parseInt(s)/parseInt(f);
        }
        else{
            document.getElementById("val").value=parseInt(s)*parseInt(f);
        }
    }

}
function myFunction() {
  var x = document.getElementById("myInput").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (x.match(emailPattern)) {
    document.getElementById("myInput").style.backgroundColor = "green";    
  }
  else{
    document.getElem