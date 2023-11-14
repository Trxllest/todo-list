import './style.css';
import toDo from './todo';
import project from './project';
import projects from './projects';
import toDoComp from './todoComp';
import projComp from './projsComp';

let testTask = new toDo("Make eggs", "2023-1-11", "Make scrambled eggss");
let testTask2 = new toDo("Finish Project", "2023-2-3", "Finish the todo project");

let testProj = new project('TestP1');
testProj.addTask(testTask);
testProj.addTask(testTask2);
console.log(JSON.stringify(testProj.logtd(), null, 2));
// testProj.logTasks();
// testProj.storeProject();
// testProj.getStoredProj();
testProj.logTasks();

let testTask3 = new toDo("Walk Dog", "2023-1-11", "Walk her 2kms");
let testTask4 = new toDo("Wash Car", "2023-2-3", "Make it sparkelin clean");

let testProj2 = new project('TestP2');
testProj2.addTask(testTask3);
testProj2.addTask(testTask4);


testProj2.clearTask(testTask3);

let page = new projects('Proj1');
page.addProjs(testProj);
page.addProjs(testProj2);

// page.storeProjs();
// page.getProjs();

/* 
Storage architecture:

        Projects {
            Project {
                toDo{
                    ...
                }
            }
        }
*/

function cards() {
    let task = document.createElement('div');
    for (let t in testProj2.toDos) {
        let todo =  testProj2.toDos[t];
        task.appendChild(toDoComp(todo));
    }
    return task;
}

console.log(page.projs["TestP1"]);
for (let p in page.projs) {
    let pj = page.projs[p];
    projComp(pj);
}

let selectedProj = document.querySelector('.nav-projs').children.item(0).textContent;

for (let t in page.projs[String(selectedProj)].toDos) {
    let task = page.projs[String(selectedProj)].toDos[t]
    console.log(task);
    toDoComp(task);
}

// document.body.appendChild(cards());