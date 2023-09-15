import { DataSource } from "typeorm";
import { Bebida } from "./entity/Bebidas";
import { Comida } from "./entity/Comidas";
import { Menu } from "./entity/Menu";
import { Pedido } from "./entity/Pedidos";
import { Postre } from "./entity/Postres";
import { Ticket } from "./entity/Tickets";
import { Usuario } from "./entity/Usuarios";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql",
    database: "comidas-reservas-system-db",
    // logging: true, // muestra peticiones a la bd
    synchronize: true,
    entities: [Usuario, Ticket, Postre, Pedido, Menu, Comida, Bebida],
});