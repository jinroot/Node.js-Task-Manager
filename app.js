

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectionDB = require('./db/connect');
app.use(express.json())
app.use(express.static('./public'))
require('dotenv').config();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorHandler');
const PORT = process.env.SERVER_PORT || 3000;
const URI = process.env.MONGO_URI;

app.get('/ayaya', (req,res) =>{
    res.send('aasasasas');
})

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware);

const start = async() =>{
    try {
        connectionDB(URI, {
            dbName: 'TaskManagerProject'
        })
        app.listen(PORT, console.log(`fkillem at ${PORT}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


start()