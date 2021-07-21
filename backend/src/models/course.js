const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        reuired: true
    }
});

const Course = mongoose.model('course', courseSchema);

module.exports = Course;