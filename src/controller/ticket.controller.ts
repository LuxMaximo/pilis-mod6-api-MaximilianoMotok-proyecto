import { Request, Response } from "express";
import { Bebida } from "../entity/Bebidas";

//corregir


export const getBebidas = async (req: Request, res: Response) => {
    console.log('entrando...');
    try {
        const bebidas = await Bebida.find({
            relations: {}
        })
        return res.json(bebidas)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const getBebida = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const bebida = await Bebida.findOne({
            where: { id: parseInt(id) },
        })


        if (!bebida) return res.status(404).json({ message: "User not found" });

        return res.json(bebida);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const createBebida = async (req: Request, res: Response) => {
    const { nombre, litro, precio } = req.body;

    //Creacion de bebida
    const bebida = new Bebida();
    bebida.nombre = nombre;
    bebida.litro = litro
    bebida.precio = precio;


    await bebida.save();

    return res.json(bebida);
};


export const updateBebida = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const bebida = await Bebida.findOneBy({ id: parseInt(id) });

        if (!bebida) return res.status(404).json({ message: "No se encontro la bebida" });

        await Bebida.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const deleteBebida = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Bebida.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "Bebida no encontrada" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};