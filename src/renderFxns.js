import './style.css';
import toDoComp from './todoComp';
import projComp from './projsComp';



export function renderPage(page) {

    //load assets
    loadNav(page); // nav bar
    loadItems(page.currentProject) // list of todos   
}



export function loadNav(page) { //projects Obj
    document.querySelector('.nav-projs').textContent = '';
    for (let p of page.projects) {
        projComp(p);
    }
}


export function loadItems(proj) { //current proj
    if (proj.tasks.length > 0){

        document.querySelector('.tasks').textContent = '';
        for (let t of proj.tasks) {
            
            toDoComp(t);
        }
    } else {
        console.log('no tasks')
    }
}

export function changeProj(page, newProj){ //projects, projects to switchtooo
    page.switchCurrProj(newProj);
    loadNav(page); // nav bar
    loadItems(page.currentProject) // list of todos
}

