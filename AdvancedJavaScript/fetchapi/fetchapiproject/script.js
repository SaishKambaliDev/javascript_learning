function getusers()
{
    fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) => {

        const cards = document.querySelector("#cards");
            cards.innerHTML = "";

        
        data.results.forEach(function (user) {
            const container = document.createElement("div");
            container.className = "container flex gap-2.5 w-[200px] max-w-[100%]";

            const card = document.createElement("div");
            card.className = "user-card flex-1 bg-[#202b3b] rounded flex items-center gap-2.5 px-3.5 py-3";

            const img = document.createElement("img");
            img.src = user.picture.large;
            img.alt = "Profile";
            img.className = "w-[34px] h-[34px] rounded-full object-cover border-2 border-slate-600 shrink-0";

            const userInfo = document.createElement("div");
            userInfo.className = "user-info flex flex-col items-start gap-[3px] min-w-0 flex-1";

            const name = document.createElement("h3");
            name.className = "text-slate-100 text-xs font-semibold";
            name.textContent = user.name.first + " " + user.name.last;

            const email = document.createElement("p");
            email.className = "text-[#a5b0c0] text-[9px] truncate w-full pr-1";
            email.textContent = user.email;

            const status = document.createElement("span");
            status.className = "bg-blue-900 text-blue-200 text-[8px] px-2 py-[3px] rounded-full mt-0.5";
            status.textContent = "Active";

            // Build the structure
            userInfo.appendChild(name);
            userInfo.appendChild(email);
            userInfo.appendChild(status);

            card.appendChild(img);
            card.appendChild(userInfo);

            container.appendChild(card);

            cards.appendChild(container);
        }
        )
    })
    .catch ((err) => {
        console.log(err);
    });
}

getusers();

document.querySelector("#refresh").addEventListener("click", function(){
    getusers();
})