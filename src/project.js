

export default class project {

    constructor(name) {
        this.name = name;
        this.toDos = {};
    }

    get getProj() {
        return this.name;
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
            console.log(`Task: ${k} is to... ${tasks[k]._desc} \n`);
        }
    }

    logtd() {
        return this.toDos;
    }

    storeProject() {
        localStorage.setItem(this.name, JSON.stringify(this.toDos));
    }

    getStoredProj() {
        const storedData = localStorage.getItem(this.name);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log(`Here are the items: `, parsedData);
            // replace this.todos with stored data
            this.toDos = parsedData;
            localStorage.removeItem(this.name);
        } else {
            console.log(`No data found in localStorage for project: ${this.name}`);
        }
    }
}
