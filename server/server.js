import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import blogRoutes from "./routes/blogRoutes.js";
import calendarRoutes from "./routes/calendarRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors()); // Ensure this matches frontend origin

const PORT = process.env.PORT || 5000;

// Connect to MongoDB first, then start the server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    // Register Routes
    app.use("/api/blogs", blogRoutes);
    app.use("/api/calendar", calendarRoutes);
    app.use("/api/auth", authRoutes);

    // Start Server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("MongoDB connection error:", error));
