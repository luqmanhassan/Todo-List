class Todos {
  constructor(title, description, duedate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
  maketodo() {
    let doc = document.getElementById('display-inbox');
    let value = document.getElementById('addTask_Input').value;
    let ym = document.getElementById('addTask_div');
    // Create Elements
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let input = document.createElement('input');
    let p2 = document.createElement('p');
    // Text Nodes
    let p1Text = document.createTextNode(value);
    let p2Text = document.createTextNode('' + &times;);

    // Appending Elements & Nodes
    doc.insertBefore(div, ym);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(input);
    div.appendChild(p2);
    p1.appendChild(p1Text);
    p2.appendChild(p2Text);
  }
}

// Event Listeners
document.getElementById('addTask_btn').addEventListener('click', displayTask);

function displayTask() {
  document.getElementById('addTask_div').style.display = 'block';
  this.style.display = 'none';
}

document
  .getElementById('addTask_addbtn')
  .addEventListener('click', function () {
    document.getElementById('addTask_div').style.display = 'none';
    document.getElementById('addTask_btn').style.display = 'block';
    const todo = new Todos();
    todo.maketodo();
  });
document
  .getElementById('addTask_cancelbtn')
  .addEventListener('click', function () {
    document.getElementById('addTask_div').style.display = 'none';
    document.getElementById('addTask_btn').style.display = 'block';
  });

// Project BTN
document
  .getElementById('addProject_btn')
  .addEventListener('click', displayProject);

function displayProject() {
  document.getElementById('addProject_div').style.display = 'block';
  this.style.display = 'none';
}
document
  .getElementById('addProject_cancelbtn')
  .addEventListener('click', function () {
    document.getElementById('addProject_div').style.display = 'none';
    document.getElementById('addProject_btn').style.display = 'block';
  });
