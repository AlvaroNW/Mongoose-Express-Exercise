const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    firstname: String,
    email: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;