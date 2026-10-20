function setDarkorLight() {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {

        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");

    }
    else {
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
}

if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"));
}
else {
    setDarkorLight();
}

window.matchMedia('(prefers-color-scheme:dark)').addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
        setDarkorLight();
    }
});

document.querySelector("#toggleTheme").addEventListener("click", function () {
    if (document.body.classList.contains('dark')) {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        localStorage.setItem("theme", "light");
    }
    else {
        document.body.classList.add('dark')
        document.body.classList.remove('light')
        localStorage.setItem("theme", "dark");
    }
});
