const mongoose = require('mongoose');

const subtopicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    topicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topic',
        required: true
    }
});

const Subtopic = mongoose.model('subtopic', subtopicSchema);

module.exports = Subtopic;