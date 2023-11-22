import project from "./project";

export default class projects {

    constructor(projects = [new project('Project1')]) {
        this._projects = projects; // array
        this._currentProject = projects[0];
    }

    get projects(){
        return this._projects;
    }

    get currentProject() {
        if (this._currentProject === undefined){
            console.error('There is no projects')
        } else {
            return this._currentProject;
        }
    }

    addProj(proj){
        this._projects.push(proj);
        this.switchCurrProj(proj);
    }

    deleteProj(projID) {
        let index = this._projects.findIndex((el) => el.id === projID);
        if (index === -1) {
            console.error(`The proj: ${projID} does not exist`);
        } else {
            const deletedEl = this._projects.splice(index,1); // array
            console.log(`${deletedEl[0].name} was deleted`);
            if (this._projects.length < 1) {
                console.log('Undefineddd');
                this._currentProject = undefined;
            } else {
                this._currentProject = this._projects[this._projects.length - 1];
            }
            return deletedEl; // array
        }
        
    }

    clearAllProjs() {
        this._projects = [new project('Project')];
        this._currentProject = this._projects[0];
    }

    switchCurrProj(proj) { // name of project we want to switch to
        const id = proj.id;
        let index = this._projects.findIndex((el) => el.id === id);
        if (index > -1){
            this._currentProject = proj;
            return this._currentProject;
        } else {
            console.error('Project does not exist')
        }
    }

    findProj(projID) {
        let proj = this._projects.find(function(p) {
            console.log(p);
            return p.id === projID;
        })
        console.log(proj);
        return proj;
    }
}