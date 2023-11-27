import projects from './projects';
import * as render from './renderFxns';
import toDo from './todo';
import project from './project';


///

const addbtn = document.querySelector('.add-item');
const title = document.getElementById('title');
const date = document.getElementById('date');
const desc = document.getElementById('desc');
const priority = document.getElementById('priority');
export const dialogBox = document.getElementById('task-dialog');
const submitBtn = document.querySelector('.subAdd');
const editBtn = document.querySelector('.subEdit');
const cancelAdd = document.getElementById('cancelBtn');
const addProjBtn = document.querySelector('.add-project');
const submitProjBtn = document.getElementById('submitProj');
const projDialog = document.getElementById('project-dialog')
const projTitle = document.getElementById('pTitle');
const cancelAddProj = document.getElementById('cancelAddProj');

///

let myPage;

//load new page or...
getSavedProjects();


let loadedPage = JSON.parse(localStorage.getItem('myTodo'));
console.log(loadedPage);

render.renderPage(myPage);

// Open dialog to add a todo card
addbtn.addEventListener('click', () => {
    document.getElementById('taskId').value = '';
    dialogBox.showModal();
});

// Submit new a todo card
submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    // Get the values from the form
    const taskId = document.getElementById('taskId').value;
    const newTitle = document.getElementById('title').value;
    const newDate = document.getElementById('date').value;
    const newDesc = document.getElementById('desc').value;
    const newPriority = document.getElementById('priority').value;

    if (taskId) {
        // Editing an existing task
        console.log('Edited task');
        const task = myPage.currentProject.tasks.find(t => t.id === taskId);
        if (task) {
            task.title = newTitle;
            task.desc = newDesc;
            task.dueDate = newDate;
            task.priority = newPriority;
        }
    } else {
        // Adding a new task
        console.log('added a new task');
        const todo = new toDo(newTitle, newDate, newDesc, newPriority);
        myPage.currentProject.addTask(todo);
    }

    // Reset form and close dialog
    title.value = '';
    date.value = '';
    desc.value = '';
    priority.value = '';
    dialogBox.close();

    // Save changes and update the display
    saveProjects(myPage);
    render.loadItems(myPage.currentProject);
});


// Cancel adding a card
cancelAdd.addEventListener('click', () => {
    dialogBox.close();
});


// Add a new project
addProjBtn.addEventListener('click', () => {
    projDialog.showModal();
});

// Submit a project
submitProjBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newProj = new project(projTitle.value);
    myPage.addProj(newProj);
    render.renderPage(myPage);
    projTitle.value = '';
    projDialog.close();
    saveProjects(myPage);
});

cancelAddProj.addEventListener('click',  () => {
    projDialog.close();
});


export function saveProjects(page) {
    page = JSON.stringify(page);
    localStorage.setItem('myTodo', page);
    console.log('saved')
}

function getSavedProjects() {
    
    const storedPage = JSON.parse(localStorage.getItem('myTodo'));
    let projArray = [];
    if (storedPage) {
        console.log(storedPage);
        let sprojects = storedPage['_projects'];
        console.log(sprojects);

        for (let p of sprojects) {
            let proj = new project(p['_name'], p['_id']);

            for (let t of p['_tasks']){
                let task = new toDo(t['_title'], t['_dueDate'], t['_desc'], t['_priority']);
                proj.addTask(task);
            }

            projArray.push(proj);
        }
        myPage = new projects(projArray);
    } else {
        myPage = new projects();
    }

    
}


export {myPage};
