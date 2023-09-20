import { Request, Response } from "express";
import { Menu } from "../entity/Menu";

//Corregir


export const getMenus = async (req: Request, res: Response) => {
    console.log('entrando...');
    try {
        const menu = await Menu.find({
            relations: {}
        })
        return res.json(menu)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const getMenu = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const menu = await Menu.findOne({
            where: { id: parseInt(id) },
        })


        if (!menu) return res.status(404).json({ message: "Menu not found" });

        return res.json(menu);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const createMenu = async (req: Request, res: Response) => {
    const { nombre, bebida, comida, postre } = req.body;

    //Creacion de menu
    const menu = new Menu();
    menu.nombreMenu = nombre;
    menu.bebida = bebida;
    menu.comida = comida;
    menu.postre = postre;


    await menu.save();

    return res.json(menu);
};


export const updateMenu = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const menu = await Menu.findOneBy({ id: parseInt(id) });

        if (!menu) return res.status(404).json({ message: "No se encontro el menu" });

        await Menu.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const deleteMenu = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Menu.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "Menu no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};