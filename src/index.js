class Todos {
  constructor(title, description, duedate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }

  makeproject() {
    let doc = document.getElementById('left');
    let div = document.createElement('div');
    let value = document.getElementById('addProject_Input').value;
    let ym = document.getElementById('addProject_btn');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.style.width = '100px';
    let p1Text = document.createTextNode(value);
    let p2Text = document.createTextNode('X');
    doc.insertBefore(div, ym);
    p1.appendChild(p1Text);
    p2.appendChild(p2Text);
    div.appendChild(p1);
    div.appendChild(p2);
  }

  maketask() {
    let doc = document.getElementById('display-inbox');
    let value = document.getElementById('addTask_Input').value;
    let ym = document.getElementById('addTask_div');
    // Create Elements
    let div = document.createElement('div');
    div.className = 'todo-div';
    let img = document.createElement('img');
    img.className = 'div-todo-img';
    img.onclick = delete_task;
    let p1 = document.createElement('p');
    p1.style.width = '200px';
    let input = document.createElement('input');
    input.type = 'date';
    input.onchange = dist;
    // Place Todo Item on other Div Sections **********
    function dist(event) {
      let e = event.target.value;
      let d = new Date(e).getUTCDate();
      let c = new Date().getUTCDate();

      if (d == c) {
        console.log('Check');
        document.getElementById('display-today').appendChild(div);
        doc.insertBefore(div, ym);
      }
    }
    let p2 = document.createElement('p');
    p2.onclick = delete_task;
    function delete_task() {
      div.remove();
    }

    // Text Nodes
    let p1Text = document.createTextNode(value);
    let p2Text = document.createTextNode('X');

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
  document.getElementById('addTask_Input').value = '';
  this.style.display = 'none';
}

document
  .getElementById('addTask_addbtn')
  .addEventListener('click', function () {
    document.getElementById('addTask_div').style.display = 'none';
    document.getElementById('addTask_btn').style.display = 'block';
    const todo = new Todos();
    todo.maketask();
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
  document.getElementById('addProject_Input').value = '';

  this.style.display = 'none';
}
document
  .getElementById('addProject_addbtn')
  .addEventListener('click', function () {
    document.getElementById('addProject_div').style.display = 'none';
    document.getElementById('addProject_btn').style.display = 'block';
    const todo = new Todos();
    todo.makeproject();
  });

document
  .getElementById('addProject_cancelbtn')
  .addEventListener('click', function () {
    document.getElementById('addProject_div').style.display = 'none';
    document.getElementById('addProject_btn').style.display = 'block';
  });

// Left Bar
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
