 

export default class project {

    constructor(name) {
        this._name = name;
        this._tasks = [];
    }

    get tasks() {
        return this._tasks;
    }

    set tasks(newTasks) {
        this._tasks = newTasks;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    
    clearAll() {
        this._tasks = [];
    }

    clearTask(task) { //toDo title
        const name = task.title
        let index = this._tasks.findIndex((el) => el.title === name);
        if (index > -1){
            const deletedEl = this._tasks.splice(index,1); // array
            console.log(`${deletedEl[0].title} was deleted`);
            return deletedEl; // array
        }
    }

    addTask(task) { //ToDo object
        if (this._tasks.findIndex((el) => el.title === task.title) === -1) {
            this._tasks.push(task);
        } else {
            alert(`${this._tasks[task.title]} already exists`);
        }
    }

    logTasks() {
        const tasksArray = this._tasks //Object.entries(this.tasks);
        for (let el of tasksArray) {
            console.log('Logging Tasks...\n');
            console.log(`Task: ${el.title} is to... ${el.desc} \n`);
        }
    }

    logtd() {
        return this.tasks;
    }
}
