class Todos {
  constructor(checklist) {
    this.checklist = checklist;
  }

  dist(event) {
    let e = event.target.value;
    let d = new Date(e).getUTCDate();
    let u = new Date();
    let c = u.getDate();
    //    console.log(d + '<br>' + c + '<br>' + e);
    if (d == c) {
      let doc = document.getElementById('display-today');
      let div = document.createElement('div');
      div.className = 'todo-div';
      let img = document.createElement('img');
      img.className = 'div-todo-img';
      img.onclick = function delete_task() {
        div.remove();
      };
      let p1 = document.createElement('p');
      p1.style.width = '200px';
      let input = document.createElement('input');
      input.type = 'date';
      let yy = u.getFullYear() + '-' + (u.getMonth() + 1) + '-' + u.getDate();
      input.value = yy;
      input.placeholder = yy;
      console.log(input);
      let p2 = document.createElement('p');
      p2.onclick = function delete_task() {
        div.remove();
      };
      let p1Text = document.createTextNode(this.checklist);
      let p2Text = document.createTextNode('X');
      doc.appendChild(div);
      div.appendChild(img);
      div.appendChild(p1);
      div.appendChild(input);
      div.appendChild(p2);
      p1.appendChild(p1Text);
      p2.appendChild(p2Text);
    }
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

  maketask(placement) {
    let doc = document.getElementById(placement);
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
    input.onchange = this.dist;

    let p2 = document.createElement('p');
    p2.onclick = delete_task;
    function delete_task() {
      div.remove();
    }

    // Text Nodes
    let p1Text = document.createTextNode(this.checklist);
    let p2Text = document.createTextNode('X');

    // Appending Elements & Nodes
    if (placement == 'display-inbox') {
      doc.insertBefore(div, ym);
    } else {
      doc.appendChild(div);
    }

    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(input);
    div.appendChild(p2);
    p1.appendChild(p1Text);
    p2.appendChild(p2Text);
  }
}
// Variables

const addTask_btn = document.getElementById('addTask_btn');
const addTask_div = document.getElementById('addTask_div');
const addProject_btn = document.getElementById('addProject_btn');

// Add Task
addTask_btn.addEventListener('click', displayTask);

function displayTask() {
  addTask_div.style.display = 'block';
  document.getElementById('addTask_Input').value = '';
  this.style.display = 'none';
}

document
  .getElementById('addTask_addbtn')
  .addEventListener('click', function () {
    addTask_div.style.display = 'none';
    addTask_btn.style.display = 'block';
    const todo = new Todos();
    todo.checklist = document.getElementById('addTask_Input').value;
    todo.maketask('display-inbox');
  });
document
  .getElementById('addTask_cancelbtn')
  .addEventListener('click', function () {
    addTask_div.style.display = 'none';
    addTask_btn.style.display = 'block';
  });

// Add Project
addProject_btn.addEventListener('click', displayProject);

function displayProject() {
  document.getElementById('addProject_div').style.display = 'block';
  document.getElementById('addProject_Input').value = '';

  this.style.display = 'none';
}
document
  .getElementById('addProject_addbtn')
  .addEventListener('click', function () {
    document.getElementById('addProject_div').style.display = 'none';
    addProject_btn.style.display = 'block';
    const todo = new Todos();
    todo.makeproject();
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

- Fix Date INput left section issue 
- Add Project BTN 



*/
