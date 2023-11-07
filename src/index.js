import './style.css';
import toDo from './todo';
import project from './project';

let testTask = new toDo("Make eggs", "2023-1-11", "Make scrambled eggss");

let testProj = new project('TestP1');
testProj.addTask(testTask);
console.log(testProj.logtd());
testProj.logTasks();


/* 
Projects {
    Project {
        ToDO{

        }
    }
}
*/