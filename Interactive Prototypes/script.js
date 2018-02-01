text = document.getElementById("text");
btn = document.getElementById("btn");
toWrite = document.getElementById("intro");

btn.onclick = function(){
    toWrite.innerHTML = text.value;
}