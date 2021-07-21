const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    subtopicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subtopic',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

const Content = mongoose.model('content', contentSchema);

module.exports = Content;