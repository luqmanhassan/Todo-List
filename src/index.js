// Variables

const addTask_btn = document.getElementById('addTask_btn');
const addTask_div = document.getElementById('addTask_div');
const addProject_btn = document.getElementById('addProject_btn');

class Todos {
  constructor(checklist) {
    this.checklist = checklist;
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
    input.onchange = dist;

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
    } else if (placement == 'div1') {
      let ym = document.getElementById('btn0');
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

    function dist(event) {
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
        console.log(this.checklist);
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
  }
}

class Project {
  constructor(name) {
    this.name = name;
  }
  makeproject(name) {
    let doc = document.getElementById('left');
    let div = document.createElement('div');
    div.className = 'project__bin';
    let value = document.getElementById('addProject_Input').value;
    let ym = document.getElementById('addProject_btn');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p2.className = 'closeSign';
    p1.style.width = '100px';
    let p1Text = document.createTextNode(value);
    let p2Text = document.createTextNode('X');
    doc.insertBefore(div, ym);
    p1.appendChild(p1Text);
    p2.appendChild(p2Text);
    div.appendChild(p1);
    div.appendChild(p2);

    div.addEventListener('click', function () {
      document.getElementById('display-inbox').style.display = 'none';
      document.getElementById('display-today').style.display = 'none';
      document.getElementById('display-thisweek').style.display = 'none';
      showProject();
    });

    function showProject() {
      // Making Right Side
      let doc = document.getElementById('right');
      let div1 = document.createElement('div');
      div1.id = 'div1';
      let h1 = document.createElement('h1');
      let h1Text = document.createTextNode(name);
      let div2 = document.createElement('div');
      div2.className = 'div2';
      let input = document.createElement('input');
      input.type = 'date';
      input.type = 'text';
      let btn0 = document.createElement('button');
      let btn0Text = document.createTextNode('Add Task');
      let btn1 = document.createElement('button');
      let btn1Text = document.createTextNode('Add');
      let btn2 = document.createElement('button');
      let btn2Text = document.createTextNode('Cancel');
      doc.appendChild(div1);
      div1.appendChild(h1);
      div1.appendChild(div2);
      h1.appendChild(h1Text);
      div2.appendChild(input);
      btn0.appendChild(btn0Text);
      div1.appendChild(btn0);
      div2.appendChild(btn1);
      div2.appendChild(btn2);
      btn1.appendChild(btn1Text);
      btn2.appendChild(btn2Text);
      btn0.id = 'btn0';
      btn0.addEventListener('click', function () {
        div2.style.display = 'flex';
        input.value = '';
        this.style.display = 'none';
      });

      btn2.addEventListener('click', function () {
        div2.style.display = 'none';
        btn0.style.display = 'block';
      });

      btn1.addEventListener('click', function () {
        div2.style.display = 'none';
        btn0.style.display = 'block';
        const todoitem = new Todos();
        todoitem.checklist = input.value;
        todoitem.maketask('div1');
      });
    }
  }
}

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
      assignment.makeproject(assignment.name);
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
Things to Work On: 
- Toogling Left Projects 
- Fixing The Order Of New Tasks in Projects 
- Fix Date Input Event Listeners on Projects 
- Fix Date Input left section issue 
- Clean The Code 
- Style The CSS 
*/
