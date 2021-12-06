// var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
var taskEl = document.getElementById("tasks-to-do");
// console.log(buttonEl);

  var createTaskHandler = function(event){
    event.preventDefault();
      console.log("button clicked");
    var taskItemEl = document.createElement("li");


    // taskItemEl.textContent = "This is a new task.";
    taskItemEl.textContent = taskEl.value;
    taskItemEl.setAttribute("class", "task-item")
    taskEl.appendChild(taskItemEl);
    console.log(taskItemEl);

  };
//   buttonEl.addEventListener("click", createTaskHandler);
formEl.addEventListener("submit", createTaskHandler);