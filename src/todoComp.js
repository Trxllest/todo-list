import deleteIcon from './imgs/delete-outline.svg';
import editIcon from './imgs/pencil-outline.svg';
import { myPage, saveProjects } from '.';

export default function toDoComp(task) {

    const card = document.createElement('div');
    card.classList.add('toDo');

    //add data attribute
    card.dataset.toDoId = task.id;

    const cardLeft = document.createElement('div');
    cardLeft.classList.add('left-card')
    const cardRight = document.createElement('div');
    cardRight.classList.add('right-card')

    //Title
    let title = document.createElement('div');
    title.classList.add('to-do-title')
    console.log(task.title);
    title.textContent = task.title;

    // Due Date
    let due = document.createElement('div');
    due.classList.add('to-do-dueDate');
    due.textContent = task.dueDate; 

    cardLeft.appendChild(title);
    cardLeft.appendChild(due);

    //Icons
    const deleteTodo = new Image();
    deleteTodo.src = deleteIcon;
    deleteTodo.classList.add('icon')
    deleteTodo.classList.add('delete-icon')
    deleteTodo.addEventListener('click', () => {
        myPage.currentProject.deleteTask(task.id);
        saveProjects(myPage);
        card.remove();
    })

    const editTodo = new Image();
    editTodo.src = editIcon;
    editTodo.classList.add('icon')
    editTodo.classList.add('edit-icon')

    cardRight.appendChild(editTodo);
    cardRight.appendChild(deleteTodo);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    document.querySelector('.tasks').appendChild(card);

    console.log(`the cards id is: ${card.dataset.toDoId}`);

}