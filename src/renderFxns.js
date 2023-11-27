import './style.css';
import toDoComp from './todoComp';
import projComp from './projsComp';
import { dialogBox } from '.';



export function renderPage(page) {

    //load assets
    loadNav(page); // nav bar
    if (page.projects.length > 0){
        loadItems(page.currentProject) // list of todos   
    }
    
}



export function loadNav(page) { //projects Obj
    document.querySelector('.nav-projs').textContent = '';
    for (let p of page.projects) {
        projComp(p);
    }
}


export function loadItems(proj) { //current proj
    document.querySelector('.tasks').textContent = '';
    if (typeof proj === "undefined"){
        document.querySelector('.tasks').textContent = ''; 
    } else if (proj.tasks.length > 0){
        for (let t of proj.tasks) {
            
            toDoComp(t);
            let editButtons = document.querySelectorAll('.edit-icon');
            for (let b of editButtons) {
                b.addEventListener('click', () => {
                    const oldTitle = t.title || '';
                    const oldDate = t.dueDate || '';
                    const oldDesc = t.desc || '';
                    const oldPriority = t.priority || 'low';
                    
                    document.getElementById('taskId').value = t.id;
                    document.getElementById('title').value = oldTitle;
                    const formattedDate = oldDate ? new Date(oldDate).toISOString().slice(0, 16) : '';
                    document.getElementById('date').value = formattedDate;
                    document.getElementById('desc').value = oldDesc;
                    document.getElementById('priority').value = oldPriority;
                    dialogBox.showModal();
                });
            }
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

