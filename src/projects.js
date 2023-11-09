export default class projects {

    constructor() {
        this.projs = {};
        this.name = "proj-pages"
    }

    addProjs(projs) { //ToDo object
        if (this.projs[projs.name] === undefined) {
            this.projs[projs.name] = projs;
        } else {
            alert(`${this.projs[projs.name]} already exists`);
        }
    }

    storeProjs() {
        localStorage.setItem("proj-pages", JSON.stringify(this.projs));
    }

    getProjs() {
        const storedProj = localStorage.getItem(this.name);
        if (storedProj) {
            const parsedData = JSON.parse(storedProj);
            console.log(`Here are the Projs: `, parsedData);
            // replace this.proj with stored data
            this.projs = parsedData;
            localStorage.removeItem(this.name);
        } else {
            console.log(`No data found in localStorage for projects}`);
        }
    }
}