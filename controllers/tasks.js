const Task = require('../models/tasks');
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper(async (req, res) => {
    //console.log(req.sessionID);
    console.log(req.protocol);
    const sessionId = req.sessionID;
    const tasks = await Task.find({ sessionId });
    res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
    const sessionId = req.sessionID;
    const task = await Task.create({ ...req.body, sessionId });
    res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const sessionId = req.sessionID;
    const task = await Task.findOne({ _id: taskID, sessionId });
    if (!task) {
        return res.status(404).json({ message: `No task with id: ${taskID}` });
    }
    res.status(200).json({task});
});

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const sessionId = req.sessionID;
    const task = await Task.findOneAndUpdate({ _id: taskID, sessionId }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return res.status(404).json({ message: `No task with id: ${taskID}` });
    }
res.status(200).json({task});
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const sessionId = req.sessionID;
    const task = await Task.findOneAndDelete({ _id: taskID, sessionId });
    if (!task) {
        return res.status(404).json({ message: `No task with id: ${taskID}` });
    }
    res.status(200).json({ message: `Task with id: ${taskID} removed successfully` });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
