import { Router } from "express";
import { createPostre, deletePostre, getPostre, getPostres, updatePostre } from "../controller/postre.controller";



const router = Router();

router.get("/postres", getPostres);

router.get("/postres/:id", getPostre);
router.post("/postres", createPostre);
router.put("/postres/:id", updatePostre);
router.delete("/postres/:id", deletePostre);

export default router;