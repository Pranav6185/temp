import mongoose from "mongoose";

const pregnancyResourceSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
});

const PregnancyResource = mongoose.model("PregnancyResource", pregnancyResourceSchema);

export default PregnancyResource;
