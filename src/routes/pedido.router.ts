import { Router } from "express";
import { createPedido, createPedidoMenuCombo, deletePedido, getPedido, getPedidos, updatePedido } from "../controller/pedido.controller";



const router = Router();

router.get("/pedidos", getPedidos);

router.get("/pedidos/:id", getPedido);
router.post("/pedidos", createPedidoMenuCombo);
router.post("/pedidosP", createPedido);
router.put("/pedidos/:id", updatePedido);
router.delete("/pedidos/:id", deletePedido);

export default router;