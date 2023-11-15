const errorHandler = require("../middleware/errorHandler");
const Warden = require("../model/Warden");


// Create a Warden
const createWarden = errorHandler(async (req, res) => {
    const warden = new Warden(req.body);
    const newWarden = await warden.save();
    res.status(201).json({
        message: "Warden Registerd Successfully!!!",
        info: newWarden
    })
})


module.exports = { createWarden }