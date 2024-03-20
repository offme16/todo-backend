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

import mongoose from 'mongoose';
import 'dotenv/config';

const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSourse=admin`;

mongoose.connect(mongoUri)
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.error('MongoDB connection error:',err));