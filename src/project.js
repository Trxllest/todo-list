

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
            delete this.toDos[task.title];
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
        // for (let t in this.toDos) {

        //     console.log(`Task:${this.toDos[t]}, Desc:${this.toDos[t]}`);
        // }
        const tasks = this.toDos //Object.entries(this.toDos);
        const keys = Object.keys(tasks);
        // const values = Object.entries(tasks)
        for (let k of keys) {
            console.log(`Task: ${k} is to... ${tasks[k].desc} \n`);
        }
    }

    logtd() {
        return this.toDos;
    }

}