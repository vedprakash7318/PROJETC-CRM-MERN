const Priority = require('../Models/priorityModel');

// Create Priority
const createPriority = async (req, res) => {
  try {
    const { priorityName, addedBy } = req.body;

    if (!priorityName || !addedBy) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const priority = await Priority.create({ priorityName, addedBy });

    return res.status(200).json({
      success: true,
      message: "Priority created successfully",
      priority
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error
    });
  }
};


// Get All Priority
const getPriorities = async (req, res) => {
  try {
    const {addedBy} = req.params;
    const priorities = await Priority.find({addedBy}).populate("addedBy", "name");

    return res.status(200).json({
      success: true,
      message: "All Priorities fetched",
      priorities
    });

  } catch (error) { 
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error
    });
  }
};

module.exports = { createPriority, getPriorities };
