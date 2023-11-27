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
    title.textContent = task.title;

    // Due Date
    let due = document.createElement('div');
    due.classList.add('to-do-dueDate');
    due.textContent = task.dueDate.toDateString(); 

    // Description
    const description = document.createElement('div');
    description.classList.add('to-do-description');
    description.textContent = task.desc;

    // priority colour code:
    if (task.priority === 'high') {
        card.classList.add('high-priority')
    } else if (task.priority === 'med') {
        card.classList.add('med-priority')
    } else {
        card.classList.add('low-priority')
    }

    cardLeft.appendChild(title);
    cardLeft.appendChild(due);
    cardLeft.appendChild(description); // Add description element

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
    editTodo.classList.add('icon');
    editTodo.classList.add('edit-icon');
    editTodo.dataset.toDoId = task.id;


    cardRight.appendChild(editTodo);
    cardRight.appendChild(deleteTodo);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    document.querySelector('.tasks').appendChild(card);

    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });

    // console.log(`the cards id is: ${card.dataset.toDoId}`);

}

//  when add todo is clicked create a dialog object for the card