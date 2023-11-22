import { myPage, saveProjects } from '.';
import deleteIcon from './imgs/delete-outline.svg';
import { renderPage } from './renderFxns';

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

    //Icons
    const deleteProj = new Image();
    deleteProj.src = deleteIcon;
    deleteProj.classList.add('icon')
    deleteProj.classList.add('delete-icon')
    deleteProj.addEventListener('click', () => {
        myPage.deleteProj(proj.id);
        saveProjects(myPage);
        navTitleElements.remove();
        renderPage(myPage);
        console.log(myPage);
    })

    navTitleElements.appendChild(navTitle);
    navTitleElements.appendChild(deleteProj)

    let nav = document.querySelector('.nav-projs');
    nav.appendChild(navTitleElements);
    console.log(myPage);


}