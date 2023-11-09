import './style.css';
import toDo from './todo';
import project from './project';

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