import express from "express";
import Blog from "../models/blogModel.js";

const router = express.Router();

// Get all blogs
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blogs", error: error.message });
    }
});

// Add a new blog
router.post("/", async (req, res) => {
    try {
        const { title, description, image } = req.body;
        if (!title || !description || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newBlog = new Blog({ title, description, image });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: "Error adding blog", error: error.message });
    }
});

export default router;
