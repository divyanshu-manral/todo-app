const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");
const taskCount = document.querySelector(".task-count");

function updateTaskCount(){
    const total = taskList.children.length;
    taskCount.textContent = `${total} Task${total !== 1 ? "s" : ""}`;
}

function createTask(taskText){

    const task = document.createElement("div");
    task.classList.add("task");

    const leftSection = document.createElement("div");
    leftSection.classList.add("task-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("span");
    text.classList.add("task-text");
    text.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "✕";

    checkbox.addEventListener("change", function(){
        task.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function(){
        task.remove();
        updateTaskCount();
    });

    leftSection.appendChild(checkbox);
    leftSection.appendChild(text);

    task.appendChild(leftSection);
    task.appendChild(deleteBtn);

    taskList.appendChild(task);

    updateTaskCount();
}

function addTask(){
    const taskText = input.value.trim();
    if(taskText === "") return;

    createTask(taskText);
    input.value = "";
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});