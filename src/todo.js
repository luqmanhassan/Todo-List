export default class Todos {
  constructor(checklist) {
    this.checklist = checklist;
  }
  maketask(placement, datevalue) {
    let doc = document.getElementById(placement);
    let ym = doc.getElementsByClassName('taskdiv')[0];

    // Create Elements
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p1 = document.createElement('input');
    let input = document.createElement('input');
    let p2 = document.createElement('p');
    let p2Text = document.createTextNode('X');

    // Ids / Attributes
    div.className = 'todo-div';
    img.className = 'div-todo-img';
    img.onclick = delete_task;
    p1.style.width = '200px';
    p1.type = 'text';
    p1.className = 'taskname';
    p1.style.border = 'none';
    p1.style.backgroundColor = 'transparent';
    p1.value = this.checklist;
    p1.addEventListener('onChange', () => {
      console.log('your in p1.onchange');
      //y.checklist = p1.value;
      //console.log(y.checklist);
    });

    input.type = 'date';
    input.onchange = this.dist;
    p2.onclick = delete_task;
    function delete_task() {
      div.remove();
    }

    // Appending Elements
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(input);
    div.appendChild(p2);
    p2.appendChild(p2Text);
    if (placement == 'display-today' || placement == 'display-thisweek') {
      input.value = datevalue;
      doc.appendChild(div);
    } else {
      doc.insertBefore(div, ym);
    }
  }

  dist = (event) => {
    let e = event.target.value;
    let d = new Date(e).getUTCDate();
    let u = new Date();
    let c = u.getDate();

    let max = c + 6;
    let min = c - 6;

    if (d == c) {
      let docx = document.getElementById('display-today');
      let innerx = docx.getElementsByClassName('taskname');
      if (innerx.length) {
        function checksum() {
          let x = '';
          for (let i = 0; i < innerx.length; i++) {
            x += innerx[i].value;
          }
          return x;
        }
        let jj = checksum();
        let be = jj.includes(this.checklist);

        if (be) {
        } else {
          this.maketask('display-today', e);
        }
      } else {
        this.maketask('display-today', e);
      }
    } else if (c < max && c > min) {
      let docy = document.getElementById('display-thisweek');
      let innery = docy.getElementsByClassName('taskname');
      if (innery.length) {
        function checksum2() {
          let x = '';
          for (let i = 0; i < innery.length; i++) {
            x += innery[i].value;
          }
          return x;
        }
        let jj = checksum2();
        let be = jj.includes(this.checklist);

        if (be) {
        } else {
          this.maketask('display-thisweek', e);
        }
      } else {
        this.maketask('display-thisweek', e);
      }
    }
  };
}
