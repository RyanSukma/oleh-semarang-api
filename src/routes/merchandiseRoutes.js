import express from "express";
import { MerchandiseController } from "../controllers/merchandiseController.js";

const router = express.Router();

router.get("/", MerchandiseController.getAll);
router.get("/:id", MerchandiseController.getById);
router.post("/", MerchandiseController.create);
router.put("/:id", MerchandiseController.update);
router.delete("/:id", MerchandiseController.remove);

export default router;