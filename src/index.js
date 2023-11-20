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

myPage = new projects();
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
});

cancelAddProj.addEventListener('click',  () => {
    projDialog.close();
});
