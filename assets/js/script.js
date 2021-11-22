var buttonEl = document.querySelector("#save-task");
var taskEl = document.getElementById("tasks-to-do");
console.log(buttonEl);

  var createTaskHandler = function(){
      console.log("button clicked");
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "This is a new task.";
    taskItemEl.setAttribute("class", "task-item")
    taskEl.appendChild(taskItemEl);

  };
  buttonEl.addEventListener("click", createTaskHandler);
