import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import  {validateTaskData}  from './middlewares/validateTaskData.js';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`;
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

export const taskSchema = new mongoose.Schema({
    description: String,
    status: String
});
export const TaskModel = mongoose.model('Task', taskSchema);



    //controller
app.get('/tasks',async(req,res)=>{
    try{
        const tasks = await TaskModel.find();
        res.json(tasks);

    }catch(err){
        res.status(500).send(err.mesage);
    }
});

app.post('/tasks', validateTaskData, async(req, res) => {
    try{
        const newTask = new TaskModel(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch(err){
        res.status(400).send(err.message);
    }
});


app.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const task = await TaskModel.findById(id);
        if (!task) {
            return res.status(404).send('Задача не найдена'); 
        }
        await TaskModel.deleteOne({ _id: id });
        res.status(204).send();
    } catch (err) {
        res.status(400).send(err.message);
    }
});

