


const { Router } = require('express')

const router = Router()

// Model
const TaskModel = require('../models/task')


router.route('/')
  .get((req, res) => {
    res.send('Welcome')
  })

// Routes
router.route('/tasks')
  .get(async (req, res) => {
    const tasks = await TaskModel.find()
    res.json(tasks)
  })

  .post(async (req, res) => {
    const {name} = req.body

    const newTask = TaskModel({
      name: name
    })

    await newTask.save()

    res.json({
      "message": "Task saved successfully!"
    })
  })



router.route('/tasks/:id')
  .put(async (req, res) => {
    const updated = await TaskModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ "message": "Task updated successfully" })
  })

  .delete(async (req, res) => {
    const removed = await TaskModel.findByIdAndDelete(req.params.id)
    res.json({ "message": "Task removed successfully"  })
  })


module.exports = router
