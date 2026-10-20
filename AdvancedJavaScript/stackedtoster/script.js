function createToster() {


    return function (notification) {
        let toster = document.querySelector("#toster");
        let div = document.createElement("div");
        div.className = "bg-gray-800 text-white px-6 py-3 rounded shadow-lg";
        toster.appendChild(div);
        div.textContent = notification;
        setTimeout(() => {
            toster.removeChild(div);
        }, 3000);
    };
}

let fn2 = createToster();

fn2("This is first notification");
fn2("This is second notification");