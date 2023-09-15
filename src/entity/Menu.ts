import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Bebida } from "./Bebidas";
import { Comida } from "./Comidas";
import { Postre } from "./Postres";

@Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
export class Menu extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreMenu: string;

    @Column()
    postre: Postre;

    @Column()
    bebida: Bebida;

    @Column()
    comida: Comida;
}