import Todos from './todo.js';
class Project extends Todos {
  constructor(name) {
    super(name);
    this.name = name;
  }
  makeproject() {
    let doc = document.getElementById('left');
    let span = document.createElement('span');
    span.className = 'project_span';
    //    span.setAttribute('data-right', value);
    let value = this.name;
    span.dataset.right = value;

    let ym = document.getElementById('addProject_btn');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p2.className = 'closeSign';
    let p1Text = document.createTextNode(value);
    let p2Text = document.createTextNode('X');
    doc.insertBefore(span, ym);
    p1.appendChild(p1Text);
    p2.appendChild(p2Text);
    span.appendChild(p1);
    span.appendChild(p2);
    this.showProject();
    span.addEventListener('click', function () {
      let Block = document.getElementById('right');
      let rightBlocks = Block.getElementsByClassName('rightDiv');

      for (let i = 0; i < rightBlocks.length; i++) {
        if (rightBlocks[i].id == this.getAttribute('data-right')) {
          rightBlocks[i].style.display = 'block';
        } else {
          rightBlocks[i].style.display = 'none';
        }
      }
    });
  }
  showProject() {
    // Create Elements
    let doc = document.getElementById('right');
    let div1 = document.createElement('div');
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode(this.name);
    let div2 = document.createElement('div');
    let input = document.createElement('input');
    let btn0 = document.createElement('button');
    let btn0Text = document.createTextNode('Add Task');
    let btn1 = document.createElement('button');
    let btn1Text = document.createTextNode('Add');
    let btn2 = document.createElement('button');
    let btn2Text = document.createTextNode('Cancel');
    //  ID & Class Setup
    btn0.id = 'btn0';
    div1.id = this.name;
    div1.style.display = 'none';
    div1.className = 'rightDiv';
    h1.id = 'h1project';
    div2.className = 'taskdiv';
    input.type = 'text';
    // Appending Elements
    doc.appendChild(div1);
    div1.appendChild(h1);
    div1.appendChild(div2);
    div1.appendChild(btn0);
    h1.appendChild(h1Text);
    div2.appendChild(input);
    btn0.appendChild(btn0Text);
    div2.appendChild(btn1);
    div2.appendChild(btn2);
    btn1.appendChild(btn1Text);
    btn2.appendChild(btn2Text);

    // Event Listeners
    btn0.addEventListener('click', function () {
      div2.style.display = 'block';
      input.value = '';
      this.style.display = 'none';
    });

    btn1.addEventListener('click', () => {
      div2.style.display = 'none';
      btn0.style.display = 'block';
      const todoitem = new Todos(input.value);
      todoitem.maketask(this.name);
    });
    btn2.addEventListener('click', function () {
      div2.style.display = 'none';
      btn0.style.display = 'block';
    });
  }
}
export default Project;
