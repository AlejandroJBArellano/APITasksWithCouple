const {Router} = require("express"),
router = Router(),
User, {TaskSchema} = require("./models/User.js");

router.route("/task")
    .get(async ({query}, res) => {
        const tasks = await TaskSchema.find(query);
        res.json(query)
    })
    .post(async ({body}, res) => {
        const newTask = new TaskSchema(body)
        await newTask.save();
        res.json(newTask)
    })
    .put(async ({query, body}, res) => {
        await TaskSchema.updateOne(taskToEdit._id, body)
        res.json(taskToEdit)
    })
    .delete(async({query}, res) => {
        await TaskSchema.findOneAndDelete(query)
        res.json("deleted")
    })
