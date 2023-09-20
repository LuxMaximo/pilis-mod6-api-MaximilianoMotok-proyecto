import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Bebida } from "./Bebidas";
import { Comida } from "./Comidas";
import { Menu } from "./Menu";
import { Postre } from "./Postres";

@Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
export class Pedido extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Menu, (clase) => clase)
    menuCombo: Menu;

    @OneToMany(() => Comida, (clase) => clase)
    comida: Comida;
    @OneToMany(() => Bebida, (clase) => clase)
    bebida: Bebida;
    @OneToMany(() => Postre, (clase) => clase)
    postre: Postre;

    @Column()
    precio: number;

    @Column({ default: false })
    cancelar: boolean;

}