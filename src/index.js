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
    if (String(value).length > 0) {
      const todo = new Todos(value);
      todo.maketask('display-inbox');
    }
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

function runRight() {
  let Block = document.getElementById('right');
  let rightBlocks = Block.getElementsByClassName('rightDiv');

  for (let i = 0; i < rightBlocks.length; i++) {
    if (rightBlocks[i].id == this.getAttribute('data-right')) {
      rightBlocks[i].style.display = 'block';
    } else {
      rightBlocks[i].style.display = 'none';
    }
  }
}

/* 
Things to Work On: 
- Fixing The Order Of New Tasks in Projects 
- Fix Date Input Event Listeners on Projects 
- Fix Date Input left section issue 
- Clean The Code 

*/
