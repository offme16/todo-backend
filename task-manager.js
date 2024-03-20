const fs = require('fs');
const Task = require('./task');

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    loadTask(){
        fs.readFile('tasks.json','utf8',(err,data)=>{
            if(err){
                console.error("Error reading file:",err);
                return;
            }
            const tasksData = JSON.parse(data);
            this.tasks = tasksData.map(task=>{
                const newTask = new TaskModel(task);
                newTask.save();
                return newTask;
            });
        });
    }

    saveTasks(filename) {
        try {
            const tasksArray = this.tasks.map(task => ({ id: task.id, description: task.description, status: task.status }));
            fs.writeFileSync(filename, JSON.stringify(tasksArray, null, 2));
            console.log('Задача успешно сохранена');
        } catch (err) {
            console.error('Ошибка', err);
        }
    }

    printTasks() {
        this.tasks.forEach(task => console.log(task.toString()));
    }

    addTask(id, description, status) {
        const newTask = new Task(description, status);
        this.tasks.push(newTask);
        this.saveTasks('tasks.json');
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks('tasks.json');
    }
}

module.exports = TaskManager;