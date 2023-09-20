import { Request, Response } from "express";
import { Pedido } from "../entity/Pedidos";
import { Ticket } from "../entity/Tickets";
import { Usuario } from "../entity/Usuarios";

//corregir


export const getTickets = async (req: Request, res: Response) => {
    console.log('entrando...');
    try {
        const ticket = await Ticket.find({
            relations: {}
        })
        return res.json(ticket)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const getTicket = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const ticket = await Ticket.findOne({
            where: { id: parseInt(id) },
        })


        if (!ticket) return res.status(404).json({ message: "Ticket not found" });

        return res.json(ticket);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const createTicket = async (req: Request, res: Response) => {
    const { idUsuario, idPedido } = req.body;

    let propina = 0.5
    try {
        const elPedido = await Pedido.findOneBy({ id: parseInt(idPedido) });
        if (!elPedido) return res.status(404).json({ message: "No se encontro el Pedido" });

        const elUsuario = await Usuario.findOneBy({ id: parseInt(idUsuario) });
        if (!elUsuario) return res.status(404).json({ message: "No se encontro el Pedido" });

        //Creacion de Ticket
        const ticket = new Ticket();
        ticket.usuario = elUsuario;
        ticket.pedido = elPedido;
        ticket.precioTotal = Number(elPedido.precio) + (Number(elPedido.precio) * propina);


        await ticket.save();

        return res.json(ticket);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }

};


export const updateTicket = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const ticket = await Ticket.findOneBy({ id: parseInt(id) });

        if (!ticket) return res.status(404).json({ message: "No se encontro el ticket" });

        await Ticket.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const deleteTicket = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Ticket.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "Ticket no encontrada" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};