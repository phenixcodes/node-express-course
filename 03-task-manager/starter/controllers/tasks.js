const Task = require('../models/Task.js')

const getAllTasks = (req,res) => {
    res.send('get all items from the file')
}

const createTask = async (req,res) => {
    const task = await Task.create(req.body)
    res.json(task)
}

const getTask = (req,res) => {
    res.json({id: req.params.id})
}

const updateTask = (req,res) => {
    res.send('update tasks')
}

const deleteTask = (req,res) => {
    res.send('delete tasks')
}

module.exports = { 
    getAllTasks, createTask, getTask, updateTask, deleteTask
}