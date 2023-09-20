import { Request, Response } from "express";
import { Bebida } from "../entity/Bebidas";
import { Comida } from "../entity/Comidas";
import { Pedido } from "../entity/Pedidos";
import { Postre } from "../entity/Postres";

//Corregir


export const getPedidos = async (req: Request, res: Response) => {
    console.log('entrando...');
    try {
        const pedido = await Pedido.find({
            relations: {}
        })
        return res.json(pedido)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const getPedido = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const pedido = await Pedido.findOne({
            where: { id: parseInt(id) },
        })


        if (!pedido) return res.status(404).json({ message: "Pedido not found" });

        return res.json(pedido);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const createPedidoMenuCombo = async (req: Request, res: Response) => {
    const { nombre, menu } = req.body;

    try {
        const elMenu = await Pedido.findOneBy({ id: parseInt(menu) });
        if (!elMenu) return res.status(404).json({ message: "No se encontro el pedido" });
        let precioComida = Number(elMenu.menuCombo.comida.precio)
        let precioBebida = Number(elMenu.menuCombo.bebida.precio)


        let precios = precioComida + precioBebida
        //Creacion de pedido
        const pedido = new Pedido();
        pedido.menuCombo = menu;
        pedido.precio = precios;



        await pedido.save();

        return res.json(pedido);
    } catch (error) {

    }
};


export const createPedido = async (req: Request, res: Response) => {
    const { comida, bebida, postre } = req.body;

    try {
        const laComida = await Comida.findOneBy({ nombre: comida });
        if (!laComida) return res.status(404).json({ message: "No se encontro la comida" });

        const laBebida = await Bebida.findOneBy({ nombre: bebida });
        if (!laBebida) return res.status(404).json({ message: "No se encontro la bebida" });

        const elPostre = await Postre.findOneBy({ nombre: postre });
        if (!elPostre) return res.status(404).json({ message: "No se encontro el postre" });

        let precioComida = Number(laComida.precio)
        let precioBebida = Number(laBebida.precio)
        let precioPostre = Number(elPostre.precio)


        let precios = precioComida + precioBebida + precioPostre

        //Creacion de pedido por unidad
        const pedido = new Pedido();
        pedido.comida = comida;
        pedido.bebida = bebida;
        pedido.postre = postre;
        pedido.precio = precios;



        await pedido.save();

        return res.json(pedido);
    } catch (error) {

    }
};

export const updatePedido = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const pedido = await Pedido.findOneBy({ id: parseInt(id) });

        if (!pedido) return res.status(404).json({ message: "No se encontro el pedido" });

        await Pedido.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const deletePedido = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Pedido.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "Pedido no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};