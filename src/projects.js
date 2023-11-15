import project from "./project";

export default class projects {

    constructor(projects = [new project('Project')]) {
        this._projects = projects; // array
        this._currentProject = this._projects[0];
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
    }

    clearAllProjs() {
        this._projects = [];
    }

    switchCurrProj(proj) { // name of project we want to switch to
        const name = proj.name;
        let index = this._projects.findIndex((el) => el.name === name);
        if (index > -1){
            this._currentProject = proj;
            return this._currentProject;
        } else {
            console.error('Project does not exist')
        }
    }

}