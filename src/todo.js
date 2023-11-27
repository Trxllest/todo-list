

export default class toDo {
    constructor(title, dueDate,desc,priority='low', toDoId = this.generateID()) { // str, datetime-local, str, str
        this._title = title;
        this._dueDate = this.dateFormatter(dueDate); // <input type="datetime-local">
        this._desc = desc;
        this._priority = priority;
        this._id = toDoId;
    }

    get title() {
        return this._title;
    }

    set title(name) {
        this._title = name;
    }

    get desc() {
        return this._desc;
    }

    set desc(name) {
        this._desc = name;
    }

    set dueDate(date){
        if (date === ''){
            this._dueDate = new Date();
        } else {
            this._dueDate = new Date(date);
        }
       
    }

    get dueDate(){
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    set priority(level){
        this._priority = level;
    }

    get id(){
        return this._id;
    }

    dateFormatter(date) {
        if (date === ''){
            let d = new Date()
            console.log(d);
            return d
        } else {
            let d = new Date(date)
            console.log(d)
            return d
        }
    } 

    generateID(){
        let id = crypto.randomUUID();
        console.log(`This is the ID: ${id}`);
        return id;
    }


    toString(){
        return `Title: ${this.title}, description: ${this.desc}, Due ${this.dueDate} with a ${this.priority} priority.`
    }

}


// function formatDate(date) {
//     ...;
// }