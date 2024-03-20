// const fs = require('fs');
// const http = require('http');
// const TaskManager = require('./task-manager');
// const server = http.createServer((req, res) => {
//     fs.readFile('tasks.json', 'utf8', (err, data) => {
//         if (err) {
//             res.writeHead(500, {'Content-Type': 'text/plain'});
//             res.end("Error reading file.");
//             return;
//         }
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(data);
//     });
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });



// const taskManager = new TaskManager();
// taskManager.loadTasks('tasks.json');

// taskManager.addTask('задача добавлена', task => {
//     console.log(`задача добавлена : ${task.toString()}`);
// });

// taskManager.removeTask('задача удалена', task => {
//     console.log(`задача удалена : ${task.toString()}`);
// });

// taskManager.addTask(6, 'написать диплом', 'не завершено');
// taskManager.removeTask(4);


// const express = require('express');
// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

import validateTaskData from './middlewares/validateTaskData';
const app = express();
app.post('/tasks', validateTaskData, async (req, res) => {
    // обработка запроса...
});


app.get('/tasks',async(req,res)=>{
    try{
        const tasks = await TaskModel.find();
        res.json(tasks);

    }catch(err){
        res.status(500).send(err.mesage);
    }
});

app.post('/tasks',async(req,res)=>{
    try{
        const newTask = new TaskModel(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch(err){
        res.status(400).send(err.message);
    }

});


app.delete('/tasks/:id', async (req, res) => {
    const id = req.id;
    try {
        const tasks = await TaskModel.find();
        const task = await tasks.find(id)
        await task.remove();
        res.status(201);
    } catch (err) {
        res.status(400).send(err.message);
    }
});