import { Router } from "express";
import { createMenu, deleteMenu, getMenu, getMenus, updateMenu } from "../controller/menu.controller";



const router = Router();

router.get("/menus", getMenus);

router.get("/menus/:id", getMenu);
router.post("/menus", createMenu);
router.put("/menus/:id", updateMenu);
router.delete("/menus/:id", deleteMenu);

export default router;