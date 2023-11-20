

export default function projComp(proj) {

    //nav Title
    let navTitle = document.createElement('div');
    navTitle.classList.add('nav-title');
    console.log(proj);
    navTitle.textContent = proj.name;

    //add ID to data attributes
    navTitle.dataset.projId = proj.id;
    console.log(`the projects id is: ${navTitle.dataset.projId}`);

    let nav = document.querySelector('.nav-projs');
    nav.appendChild(navTitle);
}