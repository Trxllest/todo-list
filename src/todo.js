

export default class toDo {
    constructor(task,dueDate,desc,priority='low') { // str, datetime-local, str, str
        this.task = task;
        this.dueDate = dueDate; // <input type="datetime-local">
        this.desc = desc;
        this.priority = priority;
    }

    get task() {
        return this._task;
    }

    set task(name) {
        this._task = name;
    }

    get desc() {
        return this._desc;
    }

    set desc(name) {
        this._task = name;
    }

    editTitle(title) {
        this.task = title;
        console.log(this.task);
    }

    editDesc(newDesc) {
        this.desc = newDesc;
    }

    editDueDate(newDate) {
        this.dueDate = newDate
    }

    editPriority(newPriotity) {
        this.priority = newPriotity
    }



}


// function formatDate(date) {
//     ...;
// }