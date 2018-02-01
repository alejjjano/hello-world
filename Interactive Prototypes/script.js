text = document.getElementById("text");
btn = document.getElementById("btn");
toWrite = document.getElementById("intro");

btn.onclick = function(){
    toWrite.innerHTML +=  "<br>" + text.value;
    text.value = "";
}

// I don't fully understand this function
// should do more reaserch about event listeners

document.getElementById("text").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btn").click();
    }
});
