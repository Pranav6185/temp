import express from "express";
import { getResources, addResource } from "../controllers/PregnancyController.js";

const router = express.Router();

router.get("/", getResources);
router.post("/", addResource);

export default router;
