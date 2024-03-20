// const Task = require('./task');
// const task1 = new Task(1, 'Написать диплом', 'в процессе');
// const task2 = new Task(2, 'Сделать лабу', 'завершено');
// const task3 = new Task(3, 'Приготовить блюдо', 'не завершено');
// console.log(task1.toString());
// console.log(task2.toString());
// console.log(task3.toString());

const TaskManager = require('./task-manager');
const taskManager = new TaskManager();
taskManager.loadTasks('tasks.json');
taskManager.printTasks();