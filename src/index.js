import './style.css';
import toDo from './todo';
import project from './project';
import projects from './projects';

let testTask = new toDo("Make eggs", "2023-1-11", "Make scrambled eggss");
let testTask2 = new toDo("Finish Project", "2023-2-3", "Finish the todo project");

let testProj = new project('TestP1');
testProj.addTask(testTask);
testProj.addTask(testTask2);
console.log(JSON.stringify(testProj.logtd(), null, 2));
// testProj.logTasks();
testProj.storeProject();
testProj.getStoredProj();
testProj.logTasks();

let testTask3 = new toDo("Walk Dog", "2023-1-11", "Walk her 2kms");
let testTask4 = new toDo("Wash Car", "2023-2-3", "Make it sparkelin clean");

let testProj2 = new project('TestP2');
testProj2.addTask(testTask3);
testProj2.addTask(testTask4);

let page = new projects('Proj1');
page.addProjs(testProj);
page.addProjs(testProj2);

page.storeProjs();
page.getProjs();