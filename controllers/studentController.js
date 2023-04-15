const Student = require("../models/studentSchema");

async function createStudent(req, res) {
    const { name, firstname, email } = req.body;

    try {
        const student = await Student.create({ name, firstname, email });
        res.status(201).json({ user: student._id });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

async function getAllStudents(req, res) {

    try {
        const students = await Student.find();
        res.status(201).json({ students});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};

async function updateStudentbyFirstName(req, res) {
    const nameToUpdate = req.params.firstname;
    const { name, email } = req.body;
    try{
        const updatedStudent = await Student.findOneAndUpdate(
            { firstname: nameToUpdate },
            { name, email },
            { new: true } 
        );
        if (updatedStudent) {
            res.status(200).json({ message: "Student updated successfully", student: updatedStudent });
        } else {
            res.status(404).json({ message: "Student not found" });
        }
    }catch(err){
        console.error(err);
        res.status(500).json({ error: err });
    }

}


module.exports = {createStudent, getAllStudents, updateStudentbyFirstName}