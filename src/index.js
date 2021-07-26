class Todos {
  constructor(title, description, duedate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}

const ym = new Todos();
Todos.prototype.yolo = 'yo';
console.log(ym.yolo);

document.getElementById('addTask_btn').addEventListener('click', displayTask);

function displayTask() {
  document.getElementById('addTask_div').style.display = 'block';
  this.style.display = 'none';
}

document
  .getElementById('addProject_btn')
  .addEventListener('click', displayProject);

function displayProject() {
  document.getElementById('addProject_div').style.display = 'block';
  this.style.display = 'none';
}
