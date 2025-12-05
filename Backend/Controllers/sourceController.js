const Source = require('../Models/sourceModel');

// Create Source
const createSource = async (req, res) => {
  try {
    const { sourceName, addedBy } = req.body;

    if (!addedBy || !sourceName) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newSource = await Source.create({ sourceName, addedBy });

    return res.status(200).json({
      success: true,
      message: "Source created successfully",
      source: newSource
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error
    });
  }
};

// Get All Sources
const getSources = async (req, res) => {
  try {
    const sources = await Source.find().populate("addedBy", "name");

    return res.status(200).json({
      success: true,
      message: "All Sources fetched",
      sources
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error
    });
  }
};

module.exports = { createSource, getSources };
