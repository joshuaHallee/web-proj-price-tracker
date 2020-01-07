const express = require('express')
const Task = require('../models/Task')
const router = express.Router()

// get all tasks (/api/task)
router.get('/', async(req, res) => {
    try {
        const task = await Task.find()
        res.json(task)
    } catch (err) {
        res.json({ message: error })
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
        res.json({ message: error })
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
        res.json({ message: error })
    }
})

// delete a task (/api/task/{taskId})
router.delete('/:taskId', async(req, res) => {
    try {
        const deletedTask = await Task.deleteOne({ _id: req.params.taskId})
        res.json(deletedTask)
    } catch (err) {
        res.json(err)
    }
})

module.exports = router