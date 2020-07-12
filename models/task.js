
const { Schema, model } = require('mongoose');


const TaskSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})


module.exports = model('TaskModel', TaskSchema)
