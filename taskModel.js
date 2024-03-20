import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    description: String,
    status: String
});

export const TaskModel = mongoose.model('Task',taskSchema);