

export default class project {

    constructor(name, toDos = {}) {
        this.name = name;
        this.toDos = toDos;
    }

    clearAll() {
        this.toDos = {}
    }

    clearTask(task) { //toDo title
        if (this.toDos[task.title] !== undefined) {
            delete this.toDos[task];
        }
    }

    addTask(task) { //ToDo object
        if (this.toDos[task.title] === undefined) {
            this.toDos[task.title] = task;
        } else {
            alert(`${this.toDos[task.title]} already exists`);
        }
    }

    logTasks() {
        for (let t in this.toDos) {
            console.log(`Task:${this.toDos[t]}, Desc:${this.toDos[t]}`);
        }
    }

    logtd() {
        return this.toDos;
    }

}