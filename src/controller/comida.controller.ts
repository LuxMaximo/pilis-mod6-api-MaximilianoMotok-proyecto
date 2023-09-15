import { Request, Response } from "express";
import { Comida } from "../entity/Comidas";




export const getComidas = async (req: Request, res: Response) => {
    console.log('entrando...');
    try {
        const comidas = await Comida.find({
            relations: {}
        })
        return res.json(comidas)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const getComida = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const comida = await Comida.findOne({
            where: { id: parseInt(id) },
        })


        if (!comida) return res.status(404).json({ message: "Food not found" });

        return res.json(comida);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const createComida = async (req: Request, res: Response) => {
    const { nombre, descripcion, precio } = req.body;

    //Creacion de bebida
    const comida = new Comida();
    comida.nombre = nombre;
    comida.descripcion = descripcion;
    comida.precio = precio;


    await comida.save();

    return res.json(comida);
};


export const updateComida = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const comida = await Comida.findOneBy({ id: parseInt(id) });

        if (!comida) return res.status(404).json({ message: "No se encontro la comida" });

        await Comida.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const deleteComida = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Comida.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "Comestible no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};