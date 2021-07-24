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
Todos.prototype.yolo = 'Bitch';

console.log(ym.yolo);
