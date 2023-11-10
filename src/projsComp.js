

export default function projComp(proj) {

    //nav Title
    let navTitle = document.createElement('div');
    navTitle.classList.add('nav-title');
    console.log(proj);
    navTitle.textContent = proj.name;

    let nav = document.querySelector('.nav-projs');
    nav.appendChild(navTitle);
}