import deleteIcon from './imgs/delete-outline.svg';
import editIcon from './imgs/pencil-outline.svg';
import { myPage, saveProjects } from '.';

export default function toDoComp(task) {

    // Reference to the dialog
    const taskDialog = document.getElementById('task-dialog');

    // Reference to the form in the dialog
    const taskForm = document.getElementById('taskForm');

    const submitBtn = document.getElementById('submitBtn');

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
    due.textContent = task.dueDate.toDateString(); 

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
    editTodo.dataset.toDoId = task.id;

    editTodo.addEventListener('click', () => {
        const oldTitle = task.title || '';
        const oldDate = task.dueDate || '';
        const oldDesc = task.desc || '';
        const oldPriority = task.priority || 'low';

        document.getElementById('title').value = oldTitle;
        const formattedDate = oldDate ? new Date(oldDate).toISOString().slice(0, 16) : '';
        document.getElementById('date').value = formattedDate;
        document.getElementById('desc').value = oldDesc;
        document.getElementById('priority').value = oldPriority;

        taskDialog.show();
        submitBtn.classList.add('subEdit');
        submitBtn.classList.remove('subAdd');
    })


    submitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Get the values from the form
        const newTitle = document.getElementById('title').value;
        const newDate = document.getElementById('date').value;
        const newDesc = document.getElementById('desc').value;
        const newPriority = document.getElementById('priority').value;

        task.title = newTitle;
        task.desc = newDesc;
        task.dueDate = newDate;
        task.priority = newPriority;

        title.textContent = task.title;
        due.textContent = task.dueDate.toDateString();

        // Reset form and close dialog
        title.value = '';
        date.value = '';
        desc.value = '';
        priority.value = '';
        submitBtn.classList.add('subAdd');
        submitBtn.classList.remove('subEdit');
        taskDialog.close();

        // Save changes and update the display
        saveProjects(myPage);
        render.loadItems(myPage.currentProject);
    });

    cardRight.appendChild(editTodo);
    cardRight.appendChild(deleteTodo);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    document.querySelector('.tasks').appendChild(card);

    console.log(`the cards id is: ${card.dataset.toDoId}`);

}

//  when add todo is clicked create a dialog object for the card