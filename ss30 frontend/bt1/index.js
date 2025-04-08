const text = document.getElementById("text");
const hide = document.getElementById("hidebtn");
const show = document.getElementById("showbtn");

hide.onclick = function(){
    text.style.display = "none";
};
show.onclick = function(){
    text.style.display = "block";
};
