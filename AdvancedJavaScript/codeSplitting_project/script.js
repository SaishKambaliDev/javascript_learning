const btn = document.querySelector("input");

btn.addEventListener("click", async function(){
    let heavy = await import("./heavy.js");
    heavy.veryheavycode();
});