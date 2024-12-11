const express = require('express');
const tasks = require('./routes/tasks.js')
const app = express();
const {getAllTasks} = require('./controllers/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()

//middleware 
app.use(express.json())

//routes
app.get('/hello', (req,res) => {
    res.send("Task Manager App")
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
    try{ 
        await connectDB(process.env.MONGO_URI)
        console.log("database connected!")
    }
    catch (error) {
        console.log(error)
    }
}

start()

app.listen(port, console.log(`port is listening on port ${port}...`))
