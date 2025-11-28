import express from "express";
import { UlasanController } from "../controllers/ulasanController.js";

const router = express.Router();

// Get ulasan by item
router.get("/:itemType/:itemId", UlasanController.getByItem);

// Get stats ulasan by item
router.get("/:itemType/:itemId/stats", UlasanController.getStats);

// Create ulasan baru
router.post("/", UlasanController.create);

// Get all ulasan (admin)
router.get("/", UlasanController.getAll);

// Delete ulasan (admin)
router.delete("/:id", UlasanController.remove);

export default router;