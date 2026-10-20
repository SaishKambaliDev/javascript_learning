let count = 0;
let seconds = 4;
let progress = document.querySelector("#bar");
let percentText = document.querySelector("#percent");

let tm = setInterval(function(){

    if(count <= 99)
    {
        count++;
        progress.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
    }
    else
    {
        document.querySelector("#text").textContent = "Downloaded!!";
        clearInterval(tm);
    }

}, (seconds * 1000) / 100);