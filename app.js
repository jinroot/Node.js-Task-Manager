const path = require('path');
const express = require('express');
const app = express();

// Required configurations
const config = require('./config/config');
const sessionConfig = require('./config/sessionConfig');  // ✅ Now correct

// Required middlewares
const cookieParser = require('cookie-parser');
const firstTimeVisitMiddleware = require('./middleware/firstTimeVisitMiddleware');

// Required routes
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/errorHandler');

// Required DB connection
const connectionDB = require('./db/connect');

// Set up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./public'));

// ✅ Use sessionConfig before any route that requires `req.session`
app.use(sessionConfig);

// ✅ Now add the first-time visit middleware (which depends on req.session)
app.use(firstTimeVisitMiddleware);

// Define routes
app.use('/api/v1/tasks', tasks);

// Route to serve suko.html
app.get('/suko', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'suko.html'));
});

app.use(notFound);
app.use(errorHandlerMiddleware);


module.exports = app;

// Start the server
const start = async () => {
    try {
        connectionDB(config.URI, { dbName: 'TaskManagerProject' });
        app.listen(config.PORT, () => console.log(`Server running at ${config.PORT}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();
