function ToDoList() {
  this.tasks = {};
}

ToDoList.prototype.addTask = function(task) {
  this.tasks[task.taskName] = task;
};


function TaskList(taskName) {
  this.taskName = taskName;
}