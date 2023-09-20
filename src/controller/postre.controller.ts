import { Request, Response } from "express";
import { Postre } from "../entity/Postres";


//corregir

export const getPostres = async (req: Request, res: Response) => {
    console.log('entrando...');
    try {
        const postre = await Postre.find({
            relations: {}
        })
        return res.json(postre)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const getPostre = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const postre = await Postre.findOne({
            where: { id: parseInt(id) },
        })


        if (!postre) return res.status(404).json({ message: "Postre not found" });

        return res.json(postre);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const createPostre = async (req: Request, res: Response) => {
    const { nombre, descripcion, precio } = req.body;

    //Creacion de postre
    const postre = new Postre();
    postre.nombre = nombre;
    postre.descripcion = descripcion;
    postre.precio = precio;


    await postre.save();

    return res.json(postre);
};


export const updatePostre = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const postre = await Postre.findOneBy({ id: parseInt(id) });

        if (!postre) return res.status(404).json({ message: "No se encontro el postre" });

        await Postre.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const deletePostre = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Postre.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "Postre no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};