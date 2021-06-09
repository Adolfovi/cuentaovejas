var number = 0;




function start(){
document.getElementById('starting').style.visibility = "hidden";
document.getElementById('jumpingSheeps').style.visibility = "visible";
document.getElementById('CountNumber').innerHTML = number;
document.getElementById('count').style.visibility = "visible";
setInterval('counting()',1000);
}


function counting(){
    document.getElementById('CountNumber').innerHTML = number;
    number = number + 1;




}