const express = require('express');
const tasks = require('./routes/tasks.js')
const app = express();
const {getAllTasks} = require('./controllers/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()
const notFound = require('./middleware/not-found.js');
const asyncWrapper = require('./middleware/async.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')

//middleware 
app.use(express.static('./public'))
app.use(express.json())

app.use(notFound)
app.use(errorHandlerMiddleware)

//routes
app.use('/api/v1/tasks', tasks)

const port = process.env.PORT || 3000

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
