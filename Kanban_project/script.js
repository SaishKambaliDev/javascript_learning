const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let dragElement = null;
const colu = [todo, progress, done];
let taskdata = {};
const tasks = document.querySelectorAll('.task');
let toggletheme = document.querySelector(".theme-toggle");

function setDarkorLight() {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
        document.querySelector("body").classList.remove("light");

    }
    else {
        document.querySelector("body").classList.add("light");
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

if (!(document.body.classList.contains("light"))) {
    toggletheme.innerHTML = '<i class="ri-sun-line"></i>';
}
else {
    toggletheme.innerHTML = '<i class="ri-moon-fill"></i>';
}


toggletheme.addEventListener("click", function () {
    document.body.classList.toggle("light");
    if (!(document.body.classList.contains("light"))) {
        toggletheme.innerHTML = '<i class="ri-sun-line"></i>';
        localStorage.setItem("theme", "dark");
    }
    else {
        toggletheme.innerHTML = '<i class="ri-moon-fill"></i>';
        localStorage.setItem("theme", "light");
    }

});


function addTask(title, desc, column) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
                    <h2>${title}</h2>
                    <p>${desc}</p>
                    <button>Delete</button>`;

    column.appendChild(div);

    div.addEventListener("drag", (e) => {
        dragElement = div;
    });

    const deleteButton = div.querySelector("button");
    deleteButton.addEventListener("click", () => {
        div.remove();
        updateTaskCount();
    });

    return div;
}



function updateTaskCount() {
    colu.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        count.innerText = tasks.length;

        taskdata[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        });


        localStorage.setItem("tasks", JSON.stringify(taskdata));

    });
}


if (localStorage.getItem('tasks')) {
    const data = JSON.parse(localStorage.getItem("tasks"));

    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            addTask(task.title, task.desc, column);
        });
    }
    updateTaskCount();
}

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        dragElement = task;
    });
});

function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        column.appendChild(dragElement);
        column.classList.remove("hover-over");

        updateTaskCount();
    });
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// Modal related logic
const toggleModalBUtton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal .bg");
const addTaskButton = document.querySelector("#add-new-task");

toggleModalBUtton.addEventListener("click", (e) => {
    modal.classList.toggle("active");
    document.querySelector("#task-title-input").value = "";
    document.querySelector('#task-desc-input').value = "";
});

modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
});

addTaskButton.addEventListener("click", () => {

    const taskTitle = document.querySelector("#task-title-input").value;
    const taskDesc = document.querySelector('#task-desc-input').value;

    if (taskTitle === "" || taskDesc === "") {
        alert("Please complete all fields");
    }
    else {
        addTask(taskTitle, taskDesc, todo);

        updateTaskCount();

        modal.classList.remove("active");
    }

});



