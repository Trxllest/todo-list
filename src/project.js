

export default class project {

    constructor(name, toDos = {}) {
        this.name = name;
        this.toDos = toDos;
    }

    clearAll() {
        this.toDos = {}
    }

    clearTask(task) { //toDo title
        if (this.toDos[task.task] !== undefined) {
            delete this.toDos[task.task];
        }
    }

    addTask(task) { //ToDo object
        if (this.toDos[task.task] === undefined) {
            this.toDos[task.task] = task;
        } else {
            alert(`${this.toDos[task.task]} already exists`);
        }
    }

    logTasks() {
        // for (let t in this.toDos) {

        //     console.log(`Task:${this.toDos[t]}, Desc:${this.toDos[t]}`);
        // }
        const tasks = Object.entries(this.toDos);
        console.log(`These are the tasks: ${tasks}`);
    }

    logtd() {
        return this.toDos;
    }

}