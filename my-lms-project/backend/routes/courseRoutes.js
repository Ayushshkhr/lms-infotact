const express = require("express");
const router = express.Router();
const Course = require("../models/course"); 
// Example route
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
