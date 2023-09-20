import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { getPostre } from "../controller/postre.controller";
import { Bebida } from "./Bebidas";
import { Comida } from "./Comidas";
import { Postre } from "./Postres";

@Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
export class Menu extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreMenu: string;

    @OneToMany(() => Postre, (clase) => clase)
    postre: Postre;

    @OneToMany(() => Bebida, (clase) => clase)
    bebida: Bebida;

    @OneToMany(() => Comida, (clase) => clase)
    comida: Comida;
}