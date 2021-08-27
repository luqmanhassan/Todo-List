import Todos from './todo.js';
import Project from './project.js';

// Variables
const addTask_btn = document.getElementById('addTask_btn');
const addTask_div = document.getElementById('addTask_div');
const addProject_btn = document.getElementById('addProject_btn');

// Add Task
addTask_btn.addEventListener('click', function () {
  addTask_div.style.display = 'block';
  document.getElementById('addTask_Input').value = '';
  this.style.display = 'none';
});

document
  .getElementById('addTask_addbtn')
  .addEventListener('click', function () {
    addTask_div.style.display = 'none';
    addTask_btn.style.display = 'block';
    let value = document.getElementById('addTask_Input').value;
    const todo = new Todos(value);
    todo.maketask('display-inbox');
  });
document
  .getElementById('addTask_cancelbtn')
  .addEventListener('click', function () {
    addTask_div.style.display = 'none';
    addTask_btn.style.display = 'block';
  });

// Add Project
addProject_btn.addEventListener('click', function () {
  document.getElementById('addProject_div').style.display = 'block';
  document.getElementById('addProject_Input').value = '';
  this.style.display = 'none';
});
document
  .getElementById('addProject_addbtn')
  .addEventListener('click', function () {
    document.getElementById('addProject_div').style.display = 'none';
    addProject_btn.style.display = 'block';
    let inputcheck = String(document.getElementById('addProject_Input').value);
    if (inputcheck.length > 0) {
      const assignment = new Project(inputcheck);
      assignment.makeproject();
    }
  });

document
  .getElementById('addProject_cancelbtn')
  .addEventListener('click', function () {
    document.getElementById('addProject_div').style.display = 'none';
    addProject_btn.style.display = 'block';
  });

// Toggling Left Section
const v = ['spanInbox', 'spanToday', 'spanWeek'];
for (let i = 0; i < v.length; i++) {
  document.getElementById(v[i]).addEventListener('click', runRight);
}

function runRight(event) {
  switch (event.target.innerHTML) {
    case 'Inbox':
      document.getElementById('display-inbox').style.display = 'block';
      document.getElementById('display-today').style.display = 'none';
      document.getElementById('display-thisweek').style.display = 'none';
      break;
    case 'Today':
      document.getElementById('display-inbox').style.display = 'none';
      document.getElementById('display-today').style.display = 'block';
      document.getElementById('display-thisweek').style.display = 'none';
      break;
    case 'This Week':
      document.getElementById('display-inbox').style.display = 'none';
      document.getElementById('display-today').style.display = 'none';
      document.getElementById('display-thisweek').style.display = 'block';
  }
}

/*
let yyy = document.getElementById('right');
let ufo = yyy.getElementsByClassName('rightDiv');

for (let i = 0; i < ufo.length; i++) {
  if (ufo[i] === this) {
    this.style.display = 'block';
  } else {
    document.getElementById(ufo[i]).style.display = 'none';
  }
}
*/

/* 
Things to Work On: 
- Toogling Left Projects 
- Fixing The Order Of New Tasks in Projects 
- Fix Date Input Event Listeners on Projects 
- Fix Date Input left section issue 
- Clean The Code 
- Style The CSS 
*/
