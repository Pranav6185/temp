import express from "express";
import { getAllEntries, addEntry, deleteEntry } from "../controllers/calendarController.js";

const router = express.Router();

router.get("/", getAllEntries);
router.post("/", addEntry);
router.delete("/:id", deleteEntry);

export default router;