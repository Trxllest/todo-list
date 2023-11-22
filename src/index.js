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
const dialogBox = document.getElementById('task-dialog');
const submitBtn = document.getElementById('submitBtn');
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

addbtn.addEventListener('click', () => {
    dialogBox.showModal();
});


submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const todo = new toDo(title.value, date.value ,desc.value ,priority.value);
    myPage.currentProject.addTask(todo);
    title.value = '';
    date.value = ''; 
    desc.value = '';
    priority.value = '';
    render.loadItems(myPage.currentProject);
    dialogBox.close();
    saveProjects(myPage);
});

cancelAdd.addEventListener('click', () => {
    dialogBox.close();
});

addProjBtn.addEventListener('click', () => {
    projDialog.showModal();
});

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
    myPage = new projects();
    const storedPage = JSON.parse(localStorage.getItem('myTodo'));

    if (storedPage) {
        // console.log(storedPage);
        let projects = storedPage['_projects'];
        console.log(projects);
        for (let p of projects) {
            let proj = new project(p['_name']);

            for (let t of p['_tasks']){
                let task = new toDo(t['_title'], t['_dueDate'], t['_desc'], t['_priority']);
                proj.addTask(task);
            }
            
            myPage.addProj(proj);
        }
    }
}


export {myPage};


/* 

MpPage [
    Projects [
        todos
    ]
]

{
    "_projects": [
        {
            "_name": "Project1",
            "_tasks": [],
            "_id": "b28849ca-05ac-4b60-87e9-6a1fad8a15e7"
        },
        {
            "_name": "fbsdfb",
            "_tasks": [],
            "_id": "6a901a1a-bc38-4d71-8a7c-1e3720836088"
        },
        {
            "_name": "yukytk",
            "_tasks": [],
            "_id": "f7896769-28f5-4aad-ad77-3dd45ea42574"
        }
    ],
    "_currentProject": {
        "_name": "yukytk",
        "_tasks": [],
        "_id": "f7896769-28f5-4aad-ad77-3dd45ea42574"
    }
}

*/