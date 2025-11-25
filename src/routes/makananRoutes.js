import express from "express";
import { MakananController } from "../controllers/makananController.js";

const router = express.Router();

router.get("/", MakananController.getAll);
router.get("/:id", MakananController.getById);
router.post("/", MakananController.create);
router.put("/:id", MakananController.update);
router.delete("/:id", MakananController.remove);

export default router;