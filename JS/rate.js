
var array= document.querySelectorAll('.rating-image');

function click1(){
    array[0].src="images/angry-color.png";
    array[1].src="images/sad.png";
    array[2].src="images/normal.png";
    array[3].src="images/happy.png";
    array[4].src="images/veryhappy.png";
    document.querySelector("#demo").innerHTML='1/5';
}
     
function click2(){
    array[0].src="images/angry.png";
    array[1].src="images/sad-color.png";
    array[2].src="images/normal.png";
    array[3].src="images/happy.png";
    array[4].src="images/veryhappy.png";
    document.querySelector("#demo").innerHTML='2/5';
}
function click3(){
    array[0].src="images/angry.png";
    array[1].src="images/sad.png";
    array[2].src="images/normal-color.png";
    array[3].src="images/happy.png";
    array[4].src="images/veryhappy.png";
    document.querySelector("#demo").innerHTML='3/5';
}
function click4(){
    array[0].src="images/angry.png";
    array[1].src="images/sad.png";
    array[2].src="images/normal.png";
    array[3].src="images/happy-color.png";
    array[4].src="images/veryhappy.png";
    document.querySelector("#demo").innerHTML='4/5';
}
function click5(){
    array[0].src="images/angry.png";
    array[1].src="images/sad.png";
    array[2].src="images/normal.png";
    array[3].src="images/happy.png";
    array[4].src="images/veryhappy-color.png";
    document.querySelector("#demo").innerHTML='5/5';
}