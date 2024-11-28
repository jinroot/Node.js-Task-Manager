const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [30, 'Name cannot exceed 30 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
    sessionId: {
        type: String,
        required: [true, 'Session ID is required'],
    }
});

module.exports = mongoose.model('Task',TaskSchema)