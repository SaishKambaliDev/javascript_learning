let form = document.querySelector("#signupForm");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let msg = document.querySelector("#resultMessage");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!(emailRegex.test(email.value)))
    {
        document.querySelector("#emailError").textContent = "Email is incorrect";
        isValid = false;
    }

    if(!(passwordRegex.test(pass.value)))
    {
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        isValid = false;
    }

    if(isValid)
    {
        msg.style.color = "green";
        msg.textContent = "Account created successfully!"
    }
    else{
        msg.style.color = "red";
        msg.textContent = "Error creating account"
    }
});