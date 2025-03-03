import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    type: { type: String, enum: ["appointment", "health_progress"], required: true },
    description: { type: String, required: true },
    notes: { type: String },
});

const Calendar = mongoose.model("Calendar", calendarSchema);

export default Calendar; 