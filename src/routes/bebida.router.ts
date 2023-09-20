import { Router } from "express";
import { createBebida, deleteBebida, getBebida, getBebidas, updateBebida } from "../controller/bebida.controller";



const router = Router();

router.get("/bebidas", getBebidas);

router.get("/bebidas/:id", getBebida);
router.post("/bebidas", createBebida);
router.put("/bebidas/:id", updateBebida);
router.delete("/bebidas/:id", deleteBebida);

export default router;