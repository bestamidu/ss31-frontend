const backgr = document.getElementById("container");
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const red = document.getElementById("red");


purple.addEventListener("click" , function(){
    backgr.style.backgroundColor ="purple";
});
red.addEventListener("click" , function(){
    backgr.style.backgroundColor ="red";
});
green.addEventListener("click" , function(){
    backgr.style.backgroundColor ="green";
});