let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let cardiv = document.querySelector("#usersContainer");



const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
        cardiv.addEventListener("click", function(dets){
            let card = dets.target.closest(".user-card");
            console.log(card);
            card.style.display = "none";
        });

    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },
    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });

        form.reset();
        this.renderUi();
    },
    renderUi: function () {
        document.querySelector("#usersContainer").innerHTML = "";
        this.users.forEach(function (user) {
            // Create the main user card
            const card = document.createElement("div");
            card.className = "user-card";

            // Create the profile image
            const img = document.createElement("img");
            img.src = user.photo;
            img.alt = user.name;
            img.className = "profile-img";

            // Create the user name
            const name = document.createElement("h3");
            name.textContent = user.username;

            // Create the user role
            const role = document.createElement("p");
            role.className = "user-role";
            role.textContent = user.role;

            // Create the user bio
            const bio = document.createElement("p");
            bio.className = "user-bio";
            bio.textContent = user.bio;
            // Append all elements to the card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(bio);

            // Append the card to the users container
            const usersContainer = document.querySelector("#usersContainer");
            usersContainer.className= "users-container";
            
            usersContainer.appendChild(card);
        })
    },
    removeUser: function () { },
};

userManager.init();

