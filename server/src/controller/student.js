const errorHandler = require("../middleware/errorHandler");
const Student = require("../model/Student");


// Create a Student
const createStudent = errorHandler(async (req, res) => {
    const student = new Student(req.body);
    const newStudent = await student.save();
    res.status(201).json({
        message: "Student Registerd Successfully!!!",
        info: newStudent
    })
})


module.exports = { createStudent }