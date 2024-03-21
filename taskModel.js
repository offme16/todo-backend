import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    status: String
});

export const TaskModel = mongoose.model('Task',taskSchema);