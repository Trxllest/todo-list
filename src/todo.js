

export default class toDo {
    constructor(title,dueDate,desc,priority='low') { // str, datetime-local, str, str
        this._title = title;
        this._dueDate = dueDate; // <input type="datetime-local">
        this._desc = desc;
        this._priority = priority;
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
        this._dueDate = date;
    }

    get dueDate(){
        return this._dueDate;
    }


    toString(){
        return `Title: ${this.title}, description: ${this.desc}, Due ${this.dueDate} with a ${this.priority} priority.`
    }

}


// function formatDate(date) {
//     ...;
// }