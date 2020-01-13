const express = require('express')
const Task = require('../models/Task')
const router = express.Router()

// get the task matching a taskId
router.get("/:taskId", async(req, res) => {
    try{
        const task = await Task.findById(req.params.taskId)
        res.json(task)
    } catch (err){
        //TODO: update error handling for cases such as 404: Not Found 
        res.status(400).json({message: err})
    }
})
// get all tasks (/api/task)
router.get('/', async(req, res) => {
    try {
        const task = await Task.find()
        res.json(task)
    } catch (err) {
        //TODO: update error handling for cases such as 404: Not Found 
        res.status(400).json({ message: err })
    }
})

// create a task (/api/task/create)
router.post('/create', async(req, res) => {
    const newTask = new Task({
        task: req.body.task
    })

    try {
        savedTask = await newTask.save()
        res.json(savedTask)
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

/*
*   update a specific task (/api/task/{taskId})
*   Put vs Patch (since theres always a confusion on which is which)
*   https://stackoverflow.com/questions/28459418/rest-api-put-vs-patch-with-real-life-examples
*/
router.patch('/update/:taskId', async(req, res) => {
    const taskId = req.params.taskId
    const taskUpdate = req.body.task
    try {
        const updatedTask = await Task.updateOne(
            { _id: { $eq: taskId } },
            {
                task: taskUpdate
            }
        )
        res.json(updatedTask)
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

// delete a task (/api/task/{taskId})
router.delete('/:taskId', async(req, res) => {
    try {
        const deletedTask = await Task.deleteOne({ _id: req.params.taskId})
        res.json(deletedTask)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router