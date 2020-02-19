const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task: { type: String, required: true }
})

/*  
*   This code creates a schema, and then exports it as a model. The collection name
*   will be called 'tasks' when viewed in your mongoDB instance.
*/
module.exports = mongoose.model('Task', taskSchema)