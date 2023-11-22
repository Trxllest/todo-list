 

export default class project {

    constructor(name, id = this.generateID()) {
        this._name = name;
        this._tasks = [];
        this._id = id;
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

    get id(){
        return this._id;
    }

    generateID(){
        let id = crypto.randomUUID();
        console.log(`This is the ID: ${id}`);
        return id;
    }
    
    clearAll() {
        this._tasks = [];
    }

    addTask(task) { //ToDo object
        if (this._tasks.findIndex((el) => el.id === task.id) === -1) {
            this._tasks.push(task);
        } else {
            alert(`${this._tasks[task.title]} already exists`);
        }
    }

    deleteTask(taskID) {
        let index = this._tasks.findIndex((el) => el.id === taskID);
        if (index === -1) {
            console.error(`The task: ${taskID} does not exist`);
        } else {
            const deletedEl = this._tasks.splice(index,1); // array
            console.log(`${deletedEl[0].title} was deleted`);
            return deletedEl; // array
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
