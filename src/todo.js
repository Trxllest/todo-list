

export default class toDo {
    constructor(task,dueDate,desc) {
        this.task = task;
        this.dueDate = dueDate; // <input type="datetime-local">
        this.desc = desc;
    }

    sayTask() {
        alert(this.task);
    }

    saydueDate() {
        alert(this.dueDate);
    }

    logDesc() {
        console.log(this.desc);
    }

    editTitle(title) {
        this.task = title;
        console.log(this.task);
    }

    editDesc(newDesc) {
        this.desc = newDesc;
    }

    // editDueDate(newDate) {
    //     this.dueDate = new Date()
    // }
}


// function formatDate(date) {
//     ...;
// }