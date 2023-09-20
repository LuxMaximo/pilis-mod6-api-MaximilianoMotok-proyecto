import { Router } from "express";
import { createTicket, deleteTicket, getTicket, getTickets, updateTicket } from "../controller/ticket.controller";



const router = Router();

router.get("/tickets", getTickets);

router.get("/tickets/:id", getTicket);
router.post("/tickets", createTicket);
router.put("/tickets/:id", updateTicket);
router.delete("/tickets/:id", deleteTicket);

export default router;