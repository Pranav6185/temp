import Calendar from "../models/calendarModel.js";

// Get all calendar entries
export const getAllEntries = async (req, res) => {
    try {
        const entries = await Calendar.find().sort({ date: 1 });
        res.json(entries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new entry (appointment or health progress)
export const addEntry = async (req, res) => {
    try {
        const { date, type, description, notes } = req.body;
        const newEntry = new Calendar({ date, type, description, notes });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an entry
export const deleteEntry = async (req, res) => {
    try {
        await Calendar.findByIdAndDelete(req.params.id);
        res.json({ message: "Entry deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};