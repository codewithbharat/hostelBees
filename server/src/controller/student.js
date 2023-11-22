const errorHandler = require("../middleware/errorHandler");
const Student = require("../model/Student");


// Create a Student
const createStudent = errorHandler(async (req, res) => {

    // Check if a student with the given email already exists
    const existingStudent = await Student.findOne({ email: req.body.email });
    if (existingStudent) {
        return res.json({ message: 'Student with this email already exists' });
    }

    // If the student doesn't exist, create a new one
    const student = new Student(req.body);
    const newStudent = await student.save();
    res.status(201).json({
        message: "Student Registerd Successfully!!!",
        info: newStudent
    })
})


module.exports = { createStudent }