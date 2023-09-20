import { Router } from "express";
import { createComida, deleteComida, getComida, getComidas, updateComida } from "../controller/comida.controller";



const router = Router();

router.get("/comidas", getComidas);

router.get("/comidas/:id", getComida);
router.post("/comidas", createComida);
router.put("/comidas/:id", updateComida);
router.delete("/comidas/:id", deleteComida);

export default router;