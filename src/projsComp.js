import { myPage, saveProjects } from '.';
import deleteIcon from './imgs/delete-outline.svg';
import { loadItems } from './renderFxns';

export default function projComp(proj) {

    //nav Title
    let navTitleElements = document.createElement('div');
    let navTitle = document.createElement('div');
    navTitleElements.classList.add('nav-title-elements');
    navTitle.classList.add('nav-title');
    console.log(proj);
    navTitle.textContent = proj.name;

    //add ID to data attributes
    navTitle.dataset.projId = proj.id;
    console.log(`the projects id is: ${navTitle.dataset.projId}`);

    //Switch event
    navTitle.addEventListener('click', () => {
        let targetID = navTitle.dataset.projId;
        let targetProj = myPage.findProj(String(targetID));

        myPage.switchCurrProj(targetProj);
        loadItems(myPage.currentProject);
    })

    //Icons
    const deleteProj = new Image();
    deleteProj.src = deleteIcon;
    deleteProj.classList.add('icon')
    deleteProj.classList.add('delete-icon')
    deleteProj.addEventListener('click', () => {
        saveProjects(myPage);
        myPage.deleteProj(proj.id);
        if (myPage.projects.length === 0) {
            localStorage.removeItem('myTodo');
        }
        navTitleElements.remove();
        console.log(myPage);
        loadItems(myPage.currentProject);
    })

    navTitleElements.appendChild(navTitle);
    navTitleElements.appendChild(deleteProj)

    let nav = document.querySelector('.nav-projs');
    nav.appendChild(navTitleElements);
    console.log(myPage);


}