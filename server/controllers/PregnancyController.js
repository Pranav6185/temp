import PregnancyResource from "../models/PregnancyResource.js";

// Get all resources
export const getResources = async (req, res) => {
    try {
        const resources = await PregnancyResource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new resource
export const addResource = async (req, res) => {
    const { title, content, category } = req.body;
    try {
        const newResource = new PregnancyResource({ title, content, category });
        await newResource.save();
        res.status(201).json(newResource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
